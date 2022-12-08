import { useState, useRef, useContext,FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../../entities/job';

import * as S from './styled';

import axios from 'axios';
import { UserContext } from '../../context/user';
import { JobsContext } from '../../context/jobs';

interface Itypes {
  name: string;
}

const typeName: { [key: string]: Itypes } = {
  plumbing: {
    name: 'Encanamento'
  },
  electric: {
    name: 'Elétrica'
  },
  technical_repairs: {
    name: 'Reparos técnicos'
  },
}

export default function CardWorkDetailed(props: Job) {
  const [ active, setActive ] = useState<boolean>(true);
  const navigate = useNavigate();
  const inputRefHours = useRef<HTMLInputElement>(null);
  const { jobs } = useContext(JobsContext);
  const { dataUser } = useContext(UserContext);

  const sendData = async (e: FormEvent) => {
    e.preventDefault()

    const hours = inputRefHours.current?.value;
    const professionalId = dataUser.accounts.find(account => account.type === 'professional')?.id

    console.log(professionalId);

    const response = await axios.post(`https://api.homefreelas.com.br/jobs/${props.id}/accept`, {
      professionalId,
      hours,
    }, {
      headers: {
        Authorization: dataUser.token,
      }
    })

    console.log(response);

    if(response.status === 200) {
      navigate(`/profissional/realizando-servico/${props.id}`);
    }
  }

  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src={props.clientPicture} alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>{props.clientName}</S.NameUser>
          <S.Problem>{typeName[props.type?.name]?.name}</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
        <S.WrapperDescription active={active}>
          <S.Title>{props.title}</S.Title>
          <S.Description>
            {props.description}
          </S.Description>
          <S.Address>
            {props.address}
          </S.Address>
        </S.WrapperDescription>
        <S.WrapperButton>

        <S.Root>
          <S.Trigger>
            <S.ButtonAccept>
              Estou a caminho
            </S.ButtonAccept>
          </S.Trigger>
          <S.Portal>
            <S.Overlay />
            <S.Content>
              <S.Form method='POST'>
                <S.TitleModal>Tempo estimado</S.TitleModal>
                <S.DescriptionModal>Tempo estimado para a conclusão do Trabalho:</S.DescriptionModal>
                <S.InputHour min={1} max={9} type="number" placeholder="Horas estimadas" ref={inputRefHours} />
                <S.CloseModal>
                  <S.ButtonConfirm onClick={sendData}>Confirmar</S.ButtonConfirm>
                  <S.ButtonClose>Fechar</S.ButtonClose>
                </S.CloseModal>
              </S.Form>
            </S.Content>
          </S.Portal>
        </S.Root>
          
          
          <S.ButtonCancel to="/profissional/clientes-encontrados">
            Cancelar
          </S.ButtonCancel>
        </S.WrapperButton>
    </S.Container>
  );
}
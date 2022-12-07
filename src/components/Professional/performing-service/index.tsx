import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';

import Section from '../../Section';
import { useContext } from 'react';
import { JobsContext } from '../../../context/jobs';
import { Job } from '../../../entities/job';
import CardService from './CardService';


export default function Main() {
    const { jobs, searchClients } = useContext(JobsContext)
    const { id } = useParams();

    useEffect(() => {
        searchClients();
    }, []);

    const cardJob = jobs.find(el => el.id === id) as Job;

    return(
        <Section>
            <S.Container>
                <S.WrapperCard>
                    <S.TitleWrapperCard>Informações do serviço</S.TitleWrapperCard>
                    <CardService {...cardJob} />
                </S.WrapperCard>
            </S.Container>
        </Section>
    );
}
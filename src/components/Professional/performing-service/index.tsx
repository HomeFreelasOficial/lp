import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';

import Section from '../../Section';
import CardService from './CardService';
import { useContext } from 'react';
import { JobsContext } from '../../../context/jobs';
import { Job } from '../../../entities/job';


export default function Main() {
    const { jobs } = useContext(JobsContext)
    const { id } = useParams();    
   
    const cardJob = jobs.find(el => el.id === id) as Job;

    // console.log(cardJob)

    return(
        <Section>
            <S.Container>
                <S.WrapperCard>
                    <S.TitleWrapperCard>Informações do serviço</S.TitleWrapperCard>
                    <CardService {...cardJob}/>
                </S.WrapperCard>
            </S.Container>
        </Section>
    );
}
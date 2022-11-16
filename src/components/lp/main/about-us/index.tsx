import * as S from './styled';

import { useNavigate } from 'react-router-dom';

import Section from '../../../Section'
import Button from '../../button';

export default function AboutUs(){
    const navigate = useNavigate();

    return(
        <Section background="url(/assets/about-us.svg)">
            <S.Wrapper>
                <S.Title>Quem Somos</S.Title>
                <S.Text>
                    Somos uma empresa que promete proporcionar as pessoas, uma melhor experiência e facilidade na hora
                    de resolver seus problemas domésticos.
                </S.Text>
                <Button 
                    label="Cadastrar" 
                    variant="primary"
                    onClick={() => navigate('/signUp')}
                />
            </S.Wrapper>
        </Section>
    );
}
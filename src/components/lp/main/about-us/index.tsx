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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque sit soluta ipsa tempora cum quam sint, ex asperiores hic velit quae dolor obcaecati repudiandae ipsam sapiente, inventore voluptatem suscipit!
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
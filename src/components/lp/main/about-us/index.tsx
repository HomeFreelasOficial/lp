import * as S from './styled';

import Section from '../../section'
import Button from '../../button';

export default function AboutUs(){
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
                />
            </S.Wrapper>
        </Section>
    );
}
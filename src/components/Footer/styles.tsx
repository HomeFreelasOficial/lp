import styled from "styled-components";

export const Lista = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;
gap: 10px;

@media screen and (min-width: 1024px){
 gap: 35px;
}
`

export const ItensLista = styled.div`
display: flex;
flex-direction: column;
gap: 1px;

@media screen and (min-width: 1024px){
 gap: 3px;
}
`

export const ItemLista = styled.a`
font-size: 10px;
color: white;
text-decoration: none;
display: flex;
align-items: center;


@media screen and (min-width: 1024px){
 font-size: 17px;
};

@media screen and (min-height: 800px){
 font-size: 17px;
};

@media screen and (min-height: 1024px){
 font-size: 20px;
}
`;

export const Titulo = styled.h3`
font-size: 10px;
font-weight: 700;
color: white;

@media screen and (min-width: 1024px){
 font-size: 20px;
};

@media screen and (min-height: 800px){
 font-size: 20px;
};

@media screen and (min-height: 1024px){
 font-size: 22px;
};
`

export const Texto = styled.p`
font-size: 10px;
color: white;

@media screen and (min-width: 1024px){
 font-size: 15px;
}

@media screen and (min-height: 800px){
 font-size: 16px;
}

@media screen and (min-height: 1024px){
 font-size: 18px;
}
`

export const ListaBaixo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const ListaCima = styled.div`
display: flex;
justify-content: space-around;
margin-right: auto;
gap: 20px;

@media screen and (min-width: 1024px){
  gap: 75px;
}
`
export const FooterComponent = styled.footer`

  width: auto;
  display: flex;
  height: 20vh;
  flex-direction:  column;
  justify-content: center;
  background-color: #222628;
  gap: 1.5em;
  padding: 1em;
 
  @media screen and (min-width: 768px){
   padding: 2em;
  }
 
  @media screen and (min-height: 768px){
   gap: 2.5em;
  }
 
  @media screen and (min-width: 1366px){
   padding: 3em;
  }
`

export const LogoAndroid = styled.img`
content: url(./src/assets/whiteandroid.svg);
margin-left: 1px;
width: 10px;

@media screen and (min-width: 1024px){
 width: 23px;
 margin-left: 8px;
}
`
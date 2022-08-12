import styled from 'styled-components';

export const List = styled.div `
display: flex;
flex-direction: column;
align-items: space-between;
gap: 10px;

@media screen and (min-width: 1024px){
 gap: 35px;
}
`;

export const ItemsList = styled.div `
display: flex;
flex-direction: column;
gap: 1px;

@media screen and (min-width: 1024px){
 gap: 3px;
}
`;

export const ItemList = styled.a `
font-size: 10px;
color: white;
text-decoration: none;

@media screen and (min-width: 1024px){
 font-size: 25px;
};

@media screen and (min-height: 800px){
 font-size: 13px;
};

@media screen and (min-height: 1024px){
 font-size: 20px;
}
`;

export const Title = styled.h3 `
font-size: 10px;
font-weight: 700;
color: white;

@media screen and (min-width: 1024px){
 font-size: 25px;
};

@media screen and (min-height: 800px){
 font-size: 14px;
};

@media screen and (min-height: 1024px){
 font-size: 22px;
};
`;

export const Text = styled.p `
font-size: 10px;
color: white;

@media screen and (min-width: 1024px){
 font-size: 15px;
}

@media screen and (min-height: 800px){
 font-size: 13px;
}

@media screen and (min-height: 1024px){
 font-size: 18px;
}
`;

export const ListDown = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListUp = styled.div `
display: flex;
justify-content: space-around;
margin-right: auto;
width: 90vw;

@media screen and (min-width: 1024px){
  gap: 75px;
}
`;
export const ConfigFooter = styled.footer `
display: flex;
align-items: space-around;
justify-content: space-around;
flex-direction: column;

width: auto;
height: 120px;
padding: 10px;

background-color: #222628;

@media screen and (min-height: 800px){
 height: 300px;
}

@media screen and (min-height: 1024px){
 height: 550px;
}

@media screen and (min-width: 1024px){
  padding: 64px;
}
`;

export const LogoAndroid = styled.img `
content: url(./src/img/FooterImages/);
margin-left: 1px;

@media screen and (min-width: 1024px){
 width: 23px;
 margin-left: 8px;
}

@media screen and (min-height: 1024px){
 width: 26px;
}
`;
import styled from 'styled-components';

export const List = styled.div `
  display: flex;
  align-items: space-between;
  flex-direction: column;
  
  gap: 5px;
 
  @media screen and (min-width: 768px){
   gap: 25px;
  };
`;

export const ItemsList = styled.div `
  display: flex;
  flex-direction: column;
  
  gap: 0.1em;
 
  @media screen and (min-width: 768px){
   gap: 0.3em;
  };
`;

export const ItemList = styled.a `
  display: flex;
  align-items: center;
  
  font-size: 12px;
  text-decoration: none;
  
  color: white;
 
  @media screen and (min-width: 768px){
   font-size: 12px;
  };
`;

export const Title = styled.h3 `
  font-size: 0.8em;
  font-weight: 700;
  
  color: white;
 
  @media screen and (min-width: 768px){
   font-size: 15px;
  };
`;

export const Text = styled.p `
  font-size: 0.7em;
  
  color: white;
 
  @media screen and (min-width: 768px){
   font-size: 14px;
  };
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
  gap: 32px;
 
  @media screen and (min-width: 768px){
    gap: 75px;
  };
`;
export const ConfigFooter = styled.footer `
  display: flex;
  flex-direction:  column;
  justify-content: center;
  
  height: 20vh;
  padding: 16px;
  gap: 15px; /* 1.5em */
  
  background-color: #222628;
 
  @media screen and (min-width: 768px){
    height: 30vh;
    padding: 2em;
  }
 
  @media screen and (min-height: 768px){
   gap: 2.5em;
  }
 
  @media screen and (min-width: 1366px){
   padding: 3em;
  }
`;

export const LogoAndroid = styled.img `
  content: url('./src/img/FooterImages/android.svg');
  
  width: 10px;
  margin-left: 1px;
 
  @media screen and (min-width: 768px){
   width: 23px;
   margin-left: 8px;
  };
`;
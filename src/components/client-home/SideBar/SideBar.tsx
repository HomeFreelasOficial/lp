import { DivBaixo, Navigation, Texto, Wrapper } from "./styles";

export default function SideBar(props: ({
  openOrClose: boolean;
})){
  
  return(
    <>
    <Navigation openOrCloseSide={props.openOrClose}>
      <Wrapper>
        <DivBaixo>
         <Texto href="/perfil">
          Editar Perfil
         </Texto>
         <Texto>
          Log out
         </Texto>
        </DivBaixo>
      </Wrapper>
    </Navigation>
    </>
  )
}
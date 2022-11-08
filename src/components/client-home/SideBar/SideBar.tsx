import { ImgBurguer, MenuBurguer } from "../Header/styles";
import { DivBaixo, DivCima, Navigation, Texto, Wrapper } from "./styles";



export default function SideBar(props: {
  funcao?: React.MouseEventHandler<HTMLButtonElement>
}){
  

  return(
    <>
    <Navigation>
      <Wrapper>
        <DivCima>
        <MenuBurguer onClick={props.funcao}><ImgBurguer/></MenuBurguer>
        </DivCima>
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
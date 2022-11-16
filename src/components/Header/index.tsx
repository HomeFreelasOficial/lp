import * as S from "./styles"

export default function Header(props: {
  functionSideBar?: React.MouseEventHandler<HTMLDivElement>;
  isOpened?: boolean;
  url?: string;
  visible?: boolean;
}){
  
  return (
    <S.Container>
      <S.Wrapper>
        <S.ItemLogo href={props.url}/>  
        <S.Menu visible={props.visible as boolean} isOpened={props.isOpened as boolean} onClick={props.functionSideBar}>
          <div></div>
          <div></div>
          <div></div>
        </S.Menu>
      </S.Wrapper>
    </S.Container>
    
  )
}
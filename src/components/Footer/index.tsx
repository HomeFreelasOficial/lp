import {
  ConfigFooter,
  List,
  ListUp,
  ListDown,
  LogoAndroid,
  Text,
  Title,
  ItemList,
  ItemsList,
} from './styles'

export function Footer() {
  return(
    <ConfigFooter>
    <ListUp>
      <List>
        <Title>HomeFreelas</Title>
        <ItemsList>
          <ItemList>Segurança</ItemList>
          <ItemList>Diferenciais</ItemList>
          <ItemList>Privacidade e termos</ItemList>
        </ItemsList>
      </List>
      <List>
        <Title>Empresa</Title>
        <ItemsList>
          <ItemList>Sobre nós</ItemList>
          <ItemList>Fale conosco</ItemList>
          <ItemList>Acesse o suporte</ItemList>
        </ItemsList>
      </List>
      <List>
        <Title>Download</Title>
        <ItemsList>
          <ItemList>Android<LogoAndroid/></ItemList>
        </ItemsList>
      </List>
    </ListUp>
    <ListDown>
      <Text>2020 &copy; HomeFreelas</Text>
      <Text>Privacidade e termos</Text>
    </ListDown>
  </ConfigFooter>
  );
}
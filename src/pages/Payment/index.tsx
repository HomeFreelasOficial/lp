import { Footer } from "../../components/Footer";
import Main from '../../components/Client/client-payment'
import Header from "../../components/Header";

export default function Payment() {
  return(
    <>
      <Header visible={false}/>
      <Main />
      <Footer/>
    </>
  );
}
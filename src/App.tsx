import LandingPage from "./components/lp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { GlobalStyles } from "./styles/global";
import SelectType from "./pages/SelectType/SelectType";

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import ProfessionalHome from "./pages/ProfessionalHome";
import FoundClients from "./pages/FoundClients";

import ClientHome from "./components/Client/client-home";
import Mapa from "./pages/MapsTest";
import ClientCallService from "./components/Client/client-call-service";
import ClientWaitingForFreela from "./components/Client/client-waiting";
import ClientServiceAccepted from "./components/Client/client-service-accepted";
import Payment from "./components/Client/client-payment";
import VerifyEmail from "./components/verifyEmail";

export function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} /> 
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/email-verification/:hash" element={<VerifyEmail/>}/>
        <Route path="/selecionar" element={<SelectType/>}/>
        <Route path="/cliente/inicio" element={<ClientHome/>}/>
        <Route path="/profissional/inicio" element={<ProfessionalHome/>}/>
        <Route path="/profissional/clientes-encontrados" element={<FoundClients/>}/>
        <Route path="/maps-teste" element={<Mapa/>}/>
        <Route path="/cliente/pedir-servico" element={<ClientCallService/>}/>
        <Route path="/cliente/aguardando-freelancer" element={<ClientWaitingForFreela/>}/>
        <Route path="/cliente/servico-aceito" element={<ClientServiceAccepted/>}/>
        <Route path="/cliente/servico-aceito/pagamento" element={<Payment/>}/>
      </Routes>
      </Router>
    </>
  );
}


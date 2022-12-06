import LandingPage from "./components/lp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { GlobalStyles } from "./styles/global";
import SelectType from "./pages/SelectType/SelectType";
import { UserContextWrapper } from "./context/user";

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import PersonalData from "./components/personal-data/Index";
import ProfessionalHome from "./pages/ProfessionalHome";
import FoundClients from "./pages/FoundClients";
import ClientData from "./components/Client/client-profile/Index";
import ClientHome from "./components/Client/client-home";
import ClientCallService from "./components/Client/client-call-service";
import ClientWaitingForFreela from "./components/Client/client-waiting";
import ClientServiceAccepted from "./components/Client/client-service-accepted";
import Payment from "./components/Client/client-payment";
import VerifyEmail from "./components/verifyEmail";
import Work from "./pages/Work";
import SearchClients from "./components/Professional/search-clients";
import NotFound from "./pages/NotFound";


export function App() {
  return (
    <UserContextWrapper>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} /> 
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/email-verification" element={<VerifyEmail/>}/>
        <Route path="/selecionar" element={<SelectType/>}/>
        <Route path="/cliente/inicio" element={<ClientHome/>}/>
        <Route path="/cliente/perfil" element={<ClientData/>}/>
        <Route path="/perfil" element={<PersonalData/>}/>
        <Route path="/profissional/inicio" element={<ProfessionalHome/>}/>
        <Route path="/profissional/procurar-cliente" element={<SearchClients/>}/>
        <Route path="/profissional/clientes-encontrados" element={<FoundClients/>} />
        <Route path="/profissional/clientes-encontrados/:id" element={<Work/>} />
        <Route path="/cliente/pedir-servico" element={<ClientCallService/>}/>
        <Route path="/cliente/aguardando-freelancer" element={<ClientWaitingForFreela/>}/>
        <Route path="/cliente/servico-aceito" element={<ClientServiceAccepted/>}/>
        <Route path="/cliente/servico-aceito/pagamento" element={<Payment/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Router>
    </UserContextWrapper>
  );
}


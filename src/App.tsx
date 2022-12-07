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
import PersonalData from "./components/personal-data/Index";
import ProfessionalHome from "./pages/ProfessionalHome";
import FoundClients from "./pages/FoundClients";
import ClientData from "./components/Client/client-profile/Index";
import ClientHome from "./components/Client/client-home";
import ClientCallService from "./components/Client/client-call-service";
import RedirectPay from "./components/Client/client-redirect-from-payment";
import Payment from "./components/Client/client-payment";
import Return from "./components/Client/Client-return";
import VerifyEmail from "./components/verifyEmail";
import Work from "./pages/Work";
import SearchClients from "./components/Professional/search-clients";
import NotFound from "./pages/NotFound";
import { JobContextWrapper } from "./context/job";
import { UserContextWrapper } from "./context/user"
import FoundProfessional from "./pages/FoundProfessional";
import PerformingService from "./pages/PerformingService";



export function App() {
  return (
    <JobContextWrapper>
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
                <Route path="/profissional/perfil" element={<PersonalData/>}/>
                <Route path="/profissional/inicio" element={<ProfessionalHome/>}/>
                <Route path="/profissional/procurar-cliente" element={<SearchClients/>}/>
                <Route path="/profissional/clientes-encontrados" element={<FoundClients/>} />
                <Route path="/profissional/clientes-encontrados/:id" element={<Work/>} />
                <Route path="/profissional/realizando-servico/:id" element={<PerformingService/>} />
                <Route path="/cliente/pedir-servico" element={<ClientCallService/>}/>
                <Route path="/cliente/aguardando-freelancer" element={<FoundProfessional/>}/>
                <Route path="/cliente/servico-aceito/redirect" element={<RedirectPay/>}/>
                <Route path="/cliente/servico-aceito/pagamento" element={<Payment/>}/>
                <Route path="/cliente/servico-aceito/retornar" element={<Return/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Router>
        </UserContextWrapper>
    </JobContextWrapper>
  );
}

 
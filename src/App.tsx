import LandingPage from "./components/lp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { GlobalStyles } from "./styles/global";
import SelectType from "./pages/SelectType/SelectType";

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import ClientHome from "./components/client-home";

export function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPage/>} /> 
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/selecionar" element={<SelectType/>}/>
        <Route path="/cliente/inicio" element={<ClientHome/>}/>
      </Routes>
      </Router>
      
    </>
  );
}


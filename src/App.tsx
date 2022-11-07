import LandingPage from "./components/lp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
      <SignUp />
      <SignIn />
    </>
  );
}


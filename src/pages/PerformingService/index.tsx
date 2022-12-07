import { Footer } from "../../components/Footer";
import Main from '../../components/Professional/performing-service';
import Header from "../../components/Header";
import { JobsContextWrapper } from "../../context/jobs";


export default function PerformingService() {
  return(
  <JobsContextWrapper>
    <Header visible={false}/>
    <Main/>
    <Footer/>
  </JobsContextWrapper>
  );
}
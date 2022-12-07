import { Footer } from "../../components/Footer";
import Main from '../../components/Professional/performing-service';
import Header from "../../components/Header";
import { JobsContext, JobsContextWrapper } from "../../context/jobs";
import { useContext, useEffect } from "react";

export function PerformingService() {
  const { searchClients } = useContext(JobsContext);

  useEffect(() => {
    searchClients();
  })
  
  return(
  <>
    <Header visible={false}/>
    <Main/>
    <Footer/>
  </>
  );
}

export default () => {
  return(
    <JobsContextWrapper>
      <PerformingService/>
    </JobsContextWrapper>
  )
}
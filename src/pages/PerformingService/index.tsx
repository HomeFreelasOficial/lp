import { Footer } from "../../components/Footer";

import Header from "../../components/Header";
import { JobsContext, JobsContextWrapper } from "../../context/jobs";
import { useContext, useEffect } from "react";
import { JobContext } from "../../context/job";
import { useParams } from "react-router-dom";

export function PerformingService() {
  const { paymentSucess, paid } = useContext(JobContext);
  const { searchClients } = useContext(JobsContext);
  const { id } = useParams();

  useEffect(() => {
    searchClients();

    setInterval(() => {
      paymentSucess(id);
    }, 3000)
  }, [])
  
  return(
  <>
  {paid === true ? 
  <>
    <Header visible={false}/>
    <Main/>
    <Footer/> 
  </>
 :
 <>
  <Header visible={false}/>
  <Main/>
  <Footer/> 
 </>
}
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
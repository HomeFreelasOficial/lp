import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useContext } from "react";
import { JobContext, JobContextWrapper } from "../../context/jobs";
import SearchClients from "../../components/Professional/search-clients";

export function FoundClients() {
  const { searchClients, jobs } = useContext(JobContext);

  console.log(jobs);

  useEffect(() =>  {
    searchClients()
  }, [])

  return(
    <>
      <Header visible={false}/>
        {jobs.length ? <FoundedClients /> : <SearchClients />}
      <Footer/>
    </>
  );
}

export default () => {
  return(
    <JobContextWrapper>
      <FoundClients/>
    </JobContextWrapper>
  );
}
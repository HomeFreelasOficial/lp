import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useContext } from "react";
import { JobContext, JobContextWrapper } from "../../context/jobs";
import SearchClients from "../../components/Professional/search-clients";

export default function FoundClients() {
  const { searchClients, jobs } = useContext(JobContext);

  console.log(jobs);

  useEffect(() =>  {
    searchClients
  }, [])

  return(
    <JobContextWrapper>
      <Header visible={false}/>
        {jobs.length ? <FoundedClients /> : <SearchClients />}
      <Footer/>
    </JobContextWrapper>
  );
}
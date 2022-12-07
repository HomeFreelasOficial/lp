import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useContext } from "react";
import { JobsContext, JobsContextWrapper } from "../../context/jobs";
import SearchClients from "../../components/Professional/search-clients";
import { UserContext } from "../../context/user";

export function FoundClients() {
  const {dataUser} = useContext(UserContext)
  const { searchClients, jobs } = useContext(JobsContext);

  useEffect(() =>  {
    searchClients(dataUser.accounts.find(account => account.type === 'professional'))
  }, [])

  return(
    <>
      <Header url="/profissional/inicio" visible={false}/>
      {jobs.length ? <FoundedClients /> : <SearchClients />}
      <Footer/>
    </>
  );
}

export default () => {
  return(
    <JobsContextWrapper>
      <FoundClients/>
    </JobsContextWrapper>
  );
}
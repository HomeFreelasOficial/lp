import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useContext } from "react";
import { JobContext } from "../../components/Context/jobs";
import SearchClients from "../../components/Professional/search-clients";

export default function FoundClients() {
  const { searchClients, jobs } = useContext(JobContext);

  // useEffect(() =>  {
  //   searchClients()
  // }, [])

  return(
    <>
      <Header visible={false}/>
      <FoundedClients />
      {/* {jobs.length ? <FoundedClients /> : <SearchClients />} */}
      <Footer/>
    </>
  );
}
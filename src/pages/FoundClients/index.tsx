import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import SearchClients from "../../components/Professional/search-clients";
import axios from "axios";

export default function FoundClients() {
  const [clients, setClients] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)

  const searchClients = async () => {
    try {
      const res = await axios.get('https://api.homefreelas.com.br')
      setClients(res as unknown as any)
    } catch(err: any) {
      console.error(err)
      setError(err)
    }
  }

  useEffect(() =>  {
    searchClients()
  }, [])

  return(
    <>
      <Header visible={false}/>
      <FoundedClients />
      {/* {clients.length ? <FoundedClients /> : <SearchClients />} */}
      <Footer/>
    </>
  );
}
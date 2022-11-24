import Header from "../../components/Header";
import FoundedClients from '../../components/Professional/found-clients'
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import SearchClients from "../../components/Professional/search-clients";
import axios from "axios";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error('Não deu dessa vez'))
  }, 3000)
})

export default function FoundClients() {
  const [clients, setClients] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)

  const searchClients = async () => {
    try {
      const res = await promise
      setClients(res as unknown as any)
    } catch(error: any) {
      console.error(error)
      setError(error)
    }
  }

  useEffect(() =>  {
    searchClients()
  }, [])

  return(
    <>
      <Header visible={false}/>
      {clients.length ? <FoundedClients /> : <SearchClients />}
      {error && <span>Deu erro: {error.message}</span>}
      <Footer/>
    </>
  );
}
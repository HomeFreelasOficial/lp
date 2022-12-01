import { createContext, useState } from 'react';
import { Job } from '../../entities/job';
import axios from "axios";

interface JobContract {
  jobs: Job[]
  searchClients: Function
}

export const JobContext = createContext({} as JobContract);

const jobs: Job[] = [];

export const CardJob = () => {
  const [clients, setClients] = useState<Job[]>([])
  const [error, setError] = useState<Error | null>(null)

  const searchClients = async () => {
    try {
      const res = await axios.get('https://api.homefreelas.com.br/jobs')
      setClients(res as unknown as any)
    } catch(err: any) {
      setError(err)
      console.error(error)
    }
  }

  clients.map((el) => {
    jobs.push(
      new Job(el.jobId, el.clientId, el.professionalId, el.description, el.title, el.typeId, el.price)
    )
  });

  return(
    <JobContext.Provider value={{ jobs, searchClients }} />
  );
}
import { createContext, useState } from 'react';
import { Job } from '../entities/job';
import axios from "axios";

interface JobContract {
  jobs: Job[]
  searchClients: Function
}

const jobs: Job[] = [];

export const JobContext = createContext({jobs} as JobContract);

export const JobsContextWrapper = ({ children }: any) => {
  const [clients, setClients] = useState<Job[]>([])
  const [error, setError] = useState<Error | null>(null)
  
  const searchClients = async () => {
    try {
      const res = await axios.get('http://localhost:1234/jobs')
      setClients(res as unknown as any)
    } catch(err: any) {
      setError(err)
      console.error(error)
    }
  }
  
  clients.map((el) => {
    jobs.push(
      new Job(el.id, el.clientId, el.professionalId, el.description, el.title, el.type, el.price, el.address)
    )
  });

  return(
    <JobContext.Provider value={{ jobs, searchClients }}>
      {children}
    </JobContext.Provider>
  );
}
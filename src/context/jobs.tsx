import { createContext, useState } from 'react';
import { Job } from '../entities/job';
import axios from "axios";
import { Account } from '../entities/account';

interface JobContract {
  jobs: Job[]
  searchClients: Function
}

export const JobsContext = createContext({} as JobContract);

export const JobsContextWrapper = ({ children }: any) => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [error, setError] = useState<Error | null>(null)
  
  const searchClients = async (account: Account) => {
    try {
      const types: string = account.jobTypes.map(jobType => jobType.name).join(',')
      const res = await axios.request({
        url: `http://localhost:1234/jobs?types=${types}`,
        method: 'GET',
        data: {
          types: []
        } 
      })
      console.log(res)
      setJobs(res.data.body.map((el: any) => {
        return new Job(el.job.id, el.job.clientId, el.job.professionalId, el.job.description, el.job.title, el.job.type, el.job.price, el.job.address, el.client.name, el.client.picture)
      }))
    } catch(err: any) {
      setError(err)
      console.error(error)
    }
  }

  return(
    <JobsContext.Provider value={{ jobs, searchClients }}>
      {children}
    </JobsContext.Provider>
  );
}
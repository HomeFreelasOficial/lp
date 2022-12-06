import { createContext, useState } from 'react'

interface Job {
    MINIMUM_HOURS: number,
    id: string,
    clientId: string,
    professionalId: string,
    description: string,
    title: string,
    type: { id: number, name: string },
    price: number,
    address: string
}

interface JobContext {
     job : Job
     newJob : Function
}


export const JobContext = createContext({} as JobContext)


export const JobContextWrapper = ({ children }: any) => {

  const [job, setJob] = useState({
        MINIMUM_HOURS: 1,
        id: '',
        clientId: '',
        professionalId: '',
        description: '',
        title: '',
        type: { id: 0, name: '' },
        price: 0,
        address: ''
  })

  const newJob = (job: Job) => {
    setJob(job)
  }
  
  return (
    <JobContext.Provider value={{job , newJob}}>
      {children}
    </JobContext.Provider>
  )
}
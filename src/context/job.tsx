import { createContext, useState, SetStateAction } from 'react'

interface IJob {
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

interface IJobs {
    client : {
        id: string,
        jobTypes: [],
        name: string,
        perHour: number,
        picture: string,
        type: "client" | "professional",
        userId: string
    },

    job : IJob,

    professional: {
        id: string,
        jobTypes: [],
        name: string,
        perHour: number,
        picture: string,
        type: "client" | "professional",
        userId: string
    }
}

import axios from 'axios'

interface Professional {
        id: string,
        jobTypes: [],
        name: string,
        perHour: number,
        picture: string,
        type: "client" | "professional",
        userId: string
}

interface JobContext {
     job : IJob,
     setNewJob : Function,
     professional: Professional,
     checkJobAccepted: Function
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

  const setNewJob = (newJob: IJob) => {
    setJob(newJob)
  }

  const [professional, setProfessional] = useState<Professional>(
    {
        id: "",
        jobTypes: [],
        name: "",
        perHour: 0,
        picture: "",
        type: "professional",
        userId: ""
    }
  )
  
  const checkJobAccepted = async (jobId: string) => {
    try {
      const res = await axios.get('http://localhost:1234/jobs')     
      const jobs : IJobs[] = (res.data.body)
      const refJob = jobs.findIndex(refJob => refJob.job.id === jobId)
      const refProfessional = jobs[refJob].professional

      if(refProfessional !== null){
        setProfessional(refProfessional)
        return true
      }
    } catch(err: any) {
      console.error(err)
    }
  }
  
  return (
    <JobContext.Provider value={{job , setNewJob, professional, checkJobAccepted}}>
      {children}
    </JobContext.Provider>
  )
}
import { createContext, useState} from 'react'

interface IJob {
    MINIMUM_HOURS: number,
    id: string,
    clientId: string,
    professionalId: string,
    description: string,
    title: string,
    type: { id: number, name: string },
    price: number,
    address: string,
    paid: boolean,
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
        type: "professional",
        userId: string,
        hours: string
    }
}

import axios from 'axios'

interface Professional {
        id: string,
        jobTypes: [],
        name: string,
        perHour: number,
        picture: string,
        type: "professional",
        userId: string,
        hours: string,
}

interface JobContext {
     job : IJob,
     paid: boolean,
     setNewJob : Function,
     professional: Professional,
     checkJobAccepted: Function,
     paymentSucess: Function
}

export const JobContext = createContext({} as JobContext)

export const JobContextWrapper = ({ children }: any) => {
  const [job, setWork] = useState<IJob>(
    {
      MINIMUM_HOURS: 0,
      id: '',
      clientId: '',
      professionalId: '',
      description: '',
      title: '',
      type: { id: 0, name: '' },
      price: 0,
      address: '',
      paid: false,
    }
  )

  const setNewJob = (newJob: IJob) => {
    console.log(newJob)
    setWork(newJob)
    console.log(job)
  }

  const [professional, setProfessional] = useState<Professional>(
    {
        id: "",
        jobTypes: [],
        name: "",
        perHour: 0,
        picture: "",
        type: "professional",
        userId: "",
        hours: "",
    }
  )

  const [ paid, setPaid ] = useState<boolean>(false);

  const paymentSucess = async (jobId: string) => {
    try {
      const res = await axios.get(`https://api.homefreelas.com.br/jobs`)     
      const jobs : IJobs[] = (res.data.body)
      const refJob = jobs.find(work => work.job.id === jobId)
      const refPaid = refJob?.job.paid
      if(refPaid){
        setPaid(refPaid)
      }
    } catch (err) {
      console.error(err)
    }
  }
  
  const checkJobAccepted = async (jobId: string) => {
    try {
      const res = await axios.get(`https://api.homefreelas.com.br/jobs`)     
      const jobs : IJobs[] = (res.data.body)
      console.log(res)
      const refJob = jobs.find(work => work.job.id === jobId)
      const refProfessional = refJob?.professional
      if(refProfessional){
        setProfessional(refProfessional)
      }
    } catch(err: any) {
      console.error(err)
    }
  }
  
  return (
    <JobContext.Provider value={{job , setNewJob, professional, checkJobAccepted, paymentSucess, paid}}>
      {children}
    </JobContext.Provider>
  )
}
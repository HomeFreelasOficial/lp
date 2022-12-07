import { useContext, useEffect, useState } from "react";
import ClientServiceAccepted from "../../components/Client/client-service-accepted";
import ClientWaitingForFreela from "../../components/Client/client-waiting";
import { JobContext } from "../../context/job";



export default function FoundProfessional(){

    const {job, professional, checkJobAccepted} = useContext(JobContext)

    const [wasFound, setWasFound] = useState<boolean>(false)  
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
      setInterval(() => {
        checkJobAccepted(job.id)
      }, 1000)
    },[])

    return (
        <>
          {professional.name !== ''? <ClientServiceAccepted/> : <ClientWaitingForFreela/>}
        </>
    )
}
import { useContext, useEffect } from "react";
import ClientServiceAccepted from "../../components/Client/client-service-accepted";
import ClientWaitingForFreela from "../../components/Client/client-waiting";
import { JobContext } from "../../context/job";
import ProfessionalHome from "../ProfessionalHome";



export default function FoundProfessional(){

    const {job, professional, checkJobAccepted} = useContext(JobContext)

    useEffect(() => {
        checkJobAccepted(job.id)
    },[])

    return (
        <>
          {professional.name !== ''? <ClientServiceAccepted/> : <ClientWaitingForFreela/>}
        </>
    )
}
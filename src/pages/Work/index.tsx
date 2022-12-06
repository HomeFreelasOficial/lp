import Header from "../../components/Header";
import Main from '../../components/Professional/work';
import { Footer } from "../../components/Footer";
import { JobsContextWrapper } from "../../context/jobs";

export default function Work() {
    return(
        <JobsContextWrapper>
        <Header />
        <Main/>
        <Footer/>
        </JobsContextWrapper>
    );
}
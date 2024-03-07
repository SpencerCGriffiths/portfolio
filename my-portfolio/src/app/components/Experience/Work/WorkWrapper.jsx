import Accordion from "../../UI/Accordion/Accordion";
import { getJobs } from "../../../../libs/methods";

const WorkWrapper = async () => {
    
    const job = await getJobs();

    const jobs = job.sort((a, b) => b.index - a.index)
    
    return (
        <>
                <Accordion jobs={jobs} />
        </>
    );
};

export default WorkWrapper;

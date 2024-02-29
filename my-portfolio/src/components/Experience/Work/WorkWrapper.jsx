import Accordion from "@/components/UI/Accordion/Accordion";
import { getJobs } from "../../../../libs/methods";

const WorkWrapper = async () => {
    
    const jobs = await getJobs();

    return (
        <>
                <Accordion jobs={jobs} />
        </>
    );
};

export default WorkWrapper;

"use client"

import React, { useState, useEffect } from "react";
import Accordion from "@/components/UI/Accordion/Accordion";
import { getJobs } from "../../../../libs/methods";

const WorkWrapper = () => {
    const [jobs, setJobs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            try {
                const fetchedJobs = await getJobs();
                console.log(fetchedJobs, "jobs in jobs");
                setJobs(fetchedJobs);
            } catch (error) {
                console.error("Failed to fetch jobs", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []); 

    return (
        <>
            <span>Work Wrapper</span>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <Accordion jobs={jobs} />
            )}
        </>
    );
};

export default WorkWrapper;

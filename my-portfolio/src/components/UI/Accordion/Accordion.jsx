"use client"

import React, { useState } from 'react';
import style from "./Accordion.module.css"

const Accordion = ({jobs}) => { 
    
    console.log(jobs, "Job Obj in accordion")
        const [isLoading, setIsLoading] = useState(true)
        // State to keep track of which accordion item is open
        const [openIndex, setOpenIndex] = useState(null);

        const toggleAccordion = (index) => {
            // If the clicked item is already open, close it, otherwise open the clicked item
            setOpenIndex(openIndex === index ? null : index);
        };
    
    return ( 
        jobs ? 
<div className={style.accordionBody}>
<div className={style.accordion}>
    {jobs.map((job, index) => (
        <div key={index} className={style.container}>
            <div
                className={style.label}
                onClick={() => toggleAccordion(index)}
            >
            <span>
                {job.role}
            </span>    
            <span>
                {job.location}
            </span>
            <span>
                {`${job.dateFrom} - ${job.dateTo}`}
            </span>
            </div>
            <div
                className={`${style.content} ${openIndex === index ? style.open : ''}`}
                style={{
                    height: openIndex === index ? 'auto' : '0',
                }}
            >
                {job.description.map((descriptor) => { 
                   <ul>
                    <li>{descriptor}</li>
                   </ul> 
                })}
                This is the content that should close or open
            </div>
        </div>
    ))}
</div>
</div> : <span> Loading </span> 
    )
}

export default Accordion
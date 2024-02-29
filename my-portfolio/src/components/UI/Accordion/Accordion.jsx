"use client"

import React, { useState } from 'react';
import style from "./Accordion.module.css"

const Accordion = ({jobs}) => { 
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
            <span className={style.role}>
                {job.role}
            </span>    
            { job.subRole[0] === "N/A" ? null :
            <span className={style.subRole}>
                {job.subRole}
            </span>
            }
            <span className={style.location}>
                {job.location}
            </span>
            <span className={style.dates}>
                {`${job.dateFrom} - ${job.dateTo}`}
            </span>
            </div>
            <div
                className={`${style.content} ${openIndex === index ? style.open : ''}`}
                style={{
                    height: openIndex === index ? 'auto' : '0',
                }}
            >
                   <ul>
                {job.description.map((descriptor, index) => { 
                    return <li key={index}  className={style.listItems}>{descriptor}</li>
                })}
                    </ul>
            </div>
        </div>
    ))}
</div>
</div> : <span> Loading </span> 
    )
}

export default Accordion
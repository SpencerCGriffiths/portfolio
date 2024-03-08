"use client"

import React, { useState } from 'react';
import style from "./Accordion.module.css"
import Image from 'next/image';

const Accordion = ({jobs}) => { 
        // State to keep track of which accordion item is open
        const [openIndex, setOpenIndex] = useState(null);

        
        const toggleAccordion = (index) => {
            // If the clicked item is already open, close it, otherwise open the clicked item
            setOpenIndex(openIndex === index ? null : index);
        };

        const handleLinkedIn = () => {
            // Opens LinkedIn in a new tab
            window.open('https://www.linkedin.com/in/spencer-clarke-griffiths-b6b302112/', '_blank');
          };

          const handleGitHub = () => {
            // Opens GitHub in a new tab
            window.open('https://github.com/SpencerCGriffiths', '_blank');
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
            {job.location === "N/A" ? null :
            <span className={style.location}>
                {job.location}
            </span>
            }
            {job.dateFrom === "N/A" ? null :
            <span className={style.dates}>
                {`${job.dateFrom} - ${job.dateTo}`}
            </span>
            }
            </div>
            <div
                className={`${style.content} ${openIndex === index ? style.open : ''}`}
                style={{
                    height: openIndex === index ? 'auto' : '0',
                }}
            >
                   <ul>
            {job.description[0] === "N/A" ? 
                <>
                <li onClick={() => {handleLinkedIn()}}>
                <Image
                src="/LinkedIn.png"
                width={40}
                height={40}
                alt="LinkedIn Logo"
                />
                Linkedin profile
                </li>
                <li onClick={() => {handleGitHub()}}>
                <Image
                src="/GitHub.png"
                width={40}
                height={40}
                alt="GitHub Logo"
                />
                Github Profile
                </li>
                <li>s.clarkegriffiths@gmail.com</li>
                <li>07464610241</li>
                </>:
                job.description.map((descriptor, index) => { 
                    return <li key={index}  className={style.listItems}>{descriptor}</li>
                })
            }
                    </ul>
            </div>
        </div>
    ))}
</div>
</div> : <span> Loading </span> 
    )
}

export default Accordion
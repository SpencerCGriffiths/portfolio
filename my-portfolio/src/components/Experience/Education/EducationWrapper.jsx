"use client"

import React, { useState } from 'react';
import style from './EducationWrapper.module.css';

const EducationWrapper = () => {
    // State to keep track of which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        // If the clicked item is already open, close it, otherwise open the clicked item
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <h2>Education Wrapper</h2>
            <span> Education
                University of Essex - 2019
                Colchester Sixth Form and College - 2014
                BA(Hons) Social Work – Grade 2:1
                AS Levels Philosophy
                Canterbury Academy - 2016
                A Levels Law and Psychology
                Philip Morant School and College - 2013
                11 GCSEs between grades A to C
            </span>
            <div className={style.accordionBody}>
                <div className={style.accordion}>
                    {[1, 2].map((item, index) => (
                        <div key={index} className={style.container}>
                            <div
                                className={style.label}
                                onClick={() => toggleAccordion(index)}
                            >
                                title
                            </div>
                            <div
                                className={`${style.content} ${openIndex === index ? style.open : ''}`}
                                style={{
                                    height: openIndex === index ? 'auto' : '0',
                                }}
                            >
                                This is the content that should close or open
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationWrapper;

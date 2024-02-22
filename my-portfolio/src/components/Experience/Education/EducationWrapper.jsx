"use client"

import React, { useState } from 'react';
import style from './EducationWrapper.module.css';
import Accordion from '@/components/UI/Accordion/Accordion';

const EducationWrapper = () => {

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
        <Accordion />
        </section>
    );
};

export default EducationWrapper;

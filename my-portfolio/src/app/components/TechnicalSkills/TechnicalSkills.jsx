'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from './TechnicalSkills.module.css'



const TechnicalSkills = () => { 

    useEffect(() => { 
        AOS.init({
                duration: 1200,
            });
    }, []);


    return ( 
        <div>
        <article className={styles.articleProgramming}>
        <section> 
        <h2 className={styles.H2Programming} data-aos="fade-right"> Programming Language&apos;s</h2>
        <p className={styles.titleProgramming} data-aos="fade-right">JavaScript</p> 
        <p className={styles.contentProgramming} data-aos="fade-right">Core programming language, utilized in both Node.js for server-side development and browsers for client-side scripts.</p>
        </section>
        </article> 
        </div>
    )
}

export default TechnicalSkills
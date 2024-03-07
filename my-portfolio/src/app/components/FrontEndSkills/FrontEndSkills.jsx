'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from './FrontEndSkills.module.css'

const FrontEndSkills = () => { 

    useEffect(() => { 
        AOS.init({
                duration: 1200,
            });
    }, []);
    
    return ( 
        <article className={styles.articleProgramming}>
        <section> 
        <h2 className={styles.H2Programming} data-aos="fade-left"> Front-end Development and Hosting</h2>
        <p className={styles.titleProgramming} data-aos="fade-left">HTML, CSS and React</p>
        <p className={styles.titleProgramming} data-aos="fade-left">Axios for managing HTTP requests</p>
        <p className={styles.titleProgramming} data-aos="fade-left">Hosting with Cloudflare, Netlify and Vercel </p>
        <ul>
            <li><p className={styles.contentProgramming} data-aos="fade-left">Proficient in optimising web performance with Lighthouse</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-left">Using WAVE Web (Accessibility Evaluation Tools) and other accessibility tools</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-left">Understanding and applying Web Content Accessibility Guidelines (WCAG)</p></li>
        </ul>
        <ul>
            <li><p className={styles.contentProgramming} data-aos="fade-left"></p></li>
        </ul>

        </section>
        </article>
    )
}

export default FrontEndSkills
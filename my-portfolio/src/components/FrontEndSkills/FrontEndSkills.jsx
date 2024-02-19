import styles from './FrontEndSkills.module.css'

const FrontEndSkills = () => { 
    return ( 
        <div>
        <h2 className={styles.H2Programming} data-aos="fade-right"> Front-end Development and Hosting</h2>
        <article className={styles.articleProgramming}>
        <section> 
        <p className={styles.titleProgramming} data-aos="fade-right">HTML, CSS and React</p>
        <p className={styles.titleProgramming} data-aos="fade-right">Using Axios for managing HTTP requests</p>
        <p className={styles.titleProgramming} data-aos="fade-right">Performance and Accessibility</p>
        <ul>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Proficient in optimizing web performance with Lighthouse</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Uses WAVE Web Accessibility Evaluation Tools and other accessibility tools</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Ensures web projects meet accessibility standards</p></li>
        </ul>
        <p className={styles.titleProgramming} data-aos="fade-right">Hosting</p>
        <ul>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Cloudflare</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Netlify</p></li>
            <li><p className={styles.contentProgramming} data-aos="fade-right">Vercel</p></li>
        </ul>

        </section>
        <section>
        {/* <Image
        src="/JavaScriptLogo.png" // Path relative to the public folder
        alt="JavaScript Logo"
        width={587} // Desired width (can adjust as needed)
        height={330} // Desired height (can adjust as needed)
        className={styles.logoProgramming}
        data-aos="fade-right"/> */}
        </section>
        </article>
        </div>
    )
}

export default FrontEndSkills
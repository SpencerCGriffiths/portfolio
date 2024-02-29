"use client"

import style from './EducationWrapper.module.css';

const EducationWrapper = () => {

    return (
        <article className={style.educationWrapper}>
            <section className={style.oneEd}>
            <h3 className={style.qualification}>BA(Hons) Social Work  2:1</h3>
            <h4 className={style.establishment}>University of Essex 2019</h4>  
            </section>
            <section className={style.oneEd}>
            <h3 className={style.qualification}>A Level Law and Psychology</h3>
            <h4 className={style.establishment}>Canterbury Academy 2016</h4>  
            </section>
            <section className={style.oneEd}>
            <h3 className={style.qualification}>AS Level Philosophy</h3>
            <h4 className={style.establishment}>Colchester Sixth Form and College 2014</h4>  
            </section>
            <section className={style.oneEd}>
            <h3 className={style.qualification}>11 GCSE's A - C</h3>
            <h4 className={style.establishment}>Philip Morant School and College 2013</h4>  
            </section>
        </article>
    );
};

export default EducationWrapper;

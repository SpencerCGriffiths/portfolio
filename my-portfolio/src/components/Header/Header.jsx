import style from "./Header.module.css"
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilMobileAndroid } from '@iconscout/react-unicons'

const Header = () => { 
    return (
        <article className={style.container}>
            <h2 className={style.title}>Spencer.C.G - Software Engineer</h2>
            <div className={style.linkWrapper}>
            <a href="https://github.com/SpencerCGriffiths"><span><UilGithub /> Github </span></a>
            <a href="https://www.linkedin.com/in/spencer-clarke-griffiths-b6b302112/"><span><UilLinkedin /> Linkedin </span></a>
            <span><UilEnvelopeEdit /> s.clarkegriffiths@gmail.com </span>
            <span><UilMobileAndroid /> 07464610241 </span>
            </div>
        </article>
    )
}

export default Header
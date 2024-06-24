import styles from "./Footer.module.css"
import FigmaIcon from "../Imagens/FigmaIcon"
import GithubIcon from "../Imagens/GithubIcon"
import LinkedinIcon from "../Imagens/LinkedinIcon"

function Footer(){
    return (
        <div>
            <div className={styles.Footer} id="Footer">
                <div className={styles.Contacts}>
                    <p>Meu contato:</p>
                    <p>(47) 98876-1780</p>
                </div>
                <div className={styles.Contacts}>
                    <p>Email:</p>
                    <p>Kevinspredemann50@gmail.com</p>
                </div>
                <div className={styles.IconsRejust}>
                    <div className={styles.Icons}><a href="https://github.com/KevinSpredemann"><GithubIcon/></a></div>
                    <div className={styles.Icons}><a href="https://www.linkedin.com/in/kevin-spredemann-469200261/"><LinkedinIcon/></a></div>
                    <div className={styles.Icons}><a href="https://www.figma.com/files/team/1342979159039424138/all-projects?fuid=1342979156978940321"><FigmaIcon/></a></div>
                </div>    
            </div>  
        </div>
    )
}

export default Footer
import styles from './Navbar.module.css'
import GithubIcon from '../Imagens/GithubIcon'
import LinkedinIcon from '../Imagens/LinkedinIcon'


function Navbar(){
    return(
        <div className={styles.navbar}>
          <div>
                <ul>
                    <li><a href='#Projects'>Projetos</a></li>
                    <li><a href='#AboutMe'>Sobre Mim</a></li>
                    <li><a href='#Footer'>Contatos</a></li>
                </ul> 
           </div>
           <div className={styles.icons}>
                <div className={styles.sizeicons}><a href='https://github.com/KevinSpredemann'><GithubIcon/></a></div>
                <div className={styles.sizeicons}><a href='https://www.linkedin.com/in/kevin-spredemann-469200261/'><LinkedinIcon/></a></div>
           </div>     
        </div>
    )
}

export default Navbar
import styles from './AboutMe.module.css'
import Timeline from '../Imagens/Timeline'

function AboutMe(){
    return(
        <div className={styles.AboutMe} id='AboutMe'>
            <h1><strong>Sobre mim</strong></h1>
            <div className={styles.years}>
                <h2>2021</h2>
                <h2>2022</h2>
                <h2>2023</h2>
                <h2>2024</h2>
            </div>
            <Timeline/>
            <div className={styles.content}>
                <p>Minha vida girava em torno de<br/>
                   jogar jogos online, sem<br/> 
                   qualquer envolvimento<br/> 
                   com programação ou<br/> 
                   estudos nessa área.</p>
                <p>Marcou meu primeiro contato<br/>
                   com programação através<br/>
                   das aulas do Gustavo Guanabara<br/> 
                   no YouTube, onde aprendi os<br/>
                   conceitos básicos e fiz meu<br/>
                   primeiro "Hello World" em Python,<br/>
                   mas acabei interrompendo<br/>
                   os estudos após alguns meses.</p>
                <p>Meu interesse por programação<br/> 
                   foi reacendido por vídeos<br/> 
                   no TikTok, que me inspiraram<br/> 
                   a reconsiderar essa carreira,<br/> 
                   embora eu não tenha retomado os<br/> 
                   estudos formalmente nesse ano.</p>
                <p>Em 2021, decidi voltar com tudo para<br/> 
                   a programação, iniciando um curso<br/> 
                   abrangente e focando inicialmente<br/>
                   em JavaScript  e React, com planos de<br/> 
                   expandir meus conhecimentos <br/> 
                   para o backend posteriormente.</p>
            </div>
        </div>
    )
}

export default AboutMe
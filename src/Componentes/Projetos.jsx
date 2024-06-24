import styles from './Projects.module.css'
import Image1 from '../Imagens/Vscode1.png'
import Image2 from '../Imagens/Vscode2.png' 
import Cards from '../Elementos/Cards'

function Projects(){
    return (
        <div className={styles.projects} id='Projects'>
            <h1><strong>Projetos:</strong></h1>
            <div className={styles.cards}>
                <Cards
                img={Image2}
                title="Projeto Landing Page"
                description="Criei uma landing page inovadora para o curso de Tecnologia da Escola DNC, focada na experiência do usuário, com design moderno e intuitivo, e funcionalidades destinadas a atrair e engajar novos alunos."
                repo="https://github.com/KevinSpredemann/projeto-landing-page"
                site="https://projeto-landing-page-kevin-spredemann.netlify.app/"
                />
                <Cards
                img={Image1}
                title="Consumindo API"
                description="Desenvolvi uma estrutura de formulário que captura informações de CEP e integra a previsão do tempo da região correspondente, oferecendo aos usuários uma experiência completa e prática."
                repo="https://github.com/KevinSpredemann/Consumindo-api"
                site="https://66396181ee937656ed591967--transcendent-heliotrope-26f0db.netlify.app/"
                />
            </div>    
        </div>
    )
}

export default Projects
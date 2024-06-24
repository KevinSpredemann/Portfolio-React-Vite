import ButtonA from './ButtonA';
import styles from './Cards.module.css';

function Cards({img, title, description, site, repo}){

    return (
        <div className={styles.cards}>
            <a href={site}>
                <img src={img} alt=""/>
            </a>
        <h1>{title}</h1>
        <p>{description}</p>
        <ButtonA text='Acesse o meu repositório' link={repo}/>
        </div>
    )
}

export default Cards
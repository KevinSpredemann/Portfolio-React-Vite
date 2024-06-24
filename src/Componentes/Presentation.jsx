import styles from './Presentation.module.css';
import {useEffect, useState} from 'react';
import ButtonA from '../Elementos/ButtonA';

function Presentation(){

    const [text, setText] = useState('')
    const toRotate = ['Kevin Ruan!', 'Desenvolvedor Front End', 'Desenvolvedor Web'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)




    useEffect(() =>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

    }

    return (
        <div className={styles.presentation} id="Presentation">
            <h1>Olá, eu sou <strong>{text}</strong></h1>
            <p>
            Cresci fascinado por telas e videogames, o que me levou<br/>
            a explorar o mundo da programação. Recentemente, iniciei<br/>
            um curso na Escola DNC para aprimorar minhas habilidades<br/>
            nessa área e desde então tenho certeza de que é aqui que quero<br/>
            construir minha carreira. Estou constantemente buscando novidades<br/>
            e me aprimorando, tanto dentro quanto fora do curso. Meu objetivo é<br/>
            imergir completamente neste campo e continuar aprendendo<br/>
            e crescendo como profissional.
            </p>
            <ButtonA link='https://github.com/KevinSpredemann' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation
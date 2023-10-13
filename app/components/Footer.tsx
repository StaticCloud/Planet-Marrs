import { FC } from "react";
import style from './styles/Footer.module.css';

const footer:FC = () => {
    return (
        <footer className={style.footer}>
            <p>Made with 💖 by Diego Marrs</p>
        </footer>
    )
}

export default footer;
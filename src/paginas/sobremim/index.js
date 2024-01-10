import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Josan!</h3>
            <img src={fotoSobreMim} alt="Foto do Josan" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>Texto Exemplo sobre mim</p>
            <p className={styles.paragrafo}>Texto Exemplo sobre mim 2</p>
        </PostModelo>
    )
}
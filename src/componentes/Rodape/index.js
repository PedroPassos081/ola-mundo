import styles from './Rodape.module.css'
import { ReactComponent  as MarcaRegistrada} from 'assets/marca_registrada.svg'


function  Rodape() {
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por mim e Alura.
        </footer>
    )

}

export default Rodape
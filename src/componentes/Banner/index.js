import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpeg'


function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas! Eu sou Pedro Passos, estudante de análise e desenvolvimento de sistemas. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Círculo colorido'
                    
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto Minha sorrindo"
                />
            </div>
        </div>
    )
}
export default Banner

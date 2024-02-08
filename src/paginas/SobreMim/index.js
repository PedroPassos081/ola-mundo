import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'


function SobreMin() {

    return (
      <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
  >
      <h3 className={styles.subtitulo}>
          Olá, eu sou Pedro!
      </h3>

      <img
          src={fotoSobreMim}
          alt="Foto do Antônio Evaldo sorrindo"
          className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
          Oi, tudo bem? Eu sou estudante de análise e densevolvimento de sistemas na UNIFG e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
          Minha história com programação começou em 2022 quando ingressei no meu curso(ADS). Onde eu aprendi lógica de programação e o básico de várias linguagens, como Python, Java. E logo me apaixonei pela programação, e sabia que era isso que queria para o meu futuro.
      </p>
      
      <p className={styles.paragrafo}>
          Com isso resolvi me aprofundar em estudar para ser um programador front-end, onde comecei com o HTML, CSS e Javascript, bootstrap, Sass e logo em seguida me aprofundei em alguns frameworks como React.js, node e typescript.
            Sou um desenvolvedor apaixonado por tecnologia e programação.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido aprendizados atrás de aprendizados.
      </p>
     
  </PostModelo>
    )
}

export default SobreMin
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
          Oi, tudo bem? Eu sou estudante de análise e desevolvimento de sistemas na UNIFG e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
      Minha história com a programação começou em 2022, quando ingressei no meu curso de ADS. Aprendi lógica de programação e o básico de várias linguagens, como Python e Java. Logo me apaixonei pela programação e soube que era isso que queria para o meu futuro.
      </p>
      
      <p className={styles.paragrafo}>
      Com isso, decidi me aprofundar em estudar para ser um programador front-end. Comecei com HTML, CSS, Javascript, Bootstrap e Sass. Logo em seguida, me aprofundei em alguns frameworks como React.js, Node e TypeScript. Sou um desenvolvedor apaixonado por tecnologia e programação.
      </p>
      
     
  </PostModelo>
    )
}

export default SobreMin
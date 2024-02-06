import styles from './PostModelo.module.css'

function PostModelo({ fotoCapa, titulo, children }) {
    return (
        <article className={styles.PostModeloContainer}>
            <div 
                 className={styles.FotoCapa} 
                 style={{backgroundImage: `url(${fotoCapa})`}} > 
            </div> 
            
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.PostConteudoContainer}>
                {children}
            </div>
    </article>
    )
}

export default PostModelo
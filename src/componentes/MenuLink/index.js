import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

function MenuLink({chieldren, to}) {
    const localizacao = useLocation();

    return (
        <Link className={`
                ${ styles.link }
                ${ localizacao.pathname === to ? styles.linkDestacado : ""}
            `} to={to}>
                {chieldren}
        </Link>
    )
}

export default MenuLink
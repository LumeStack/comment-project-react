import styles from './Header.module.css'
import lumeLogo from '../assets/lume-logo.png'


export function Header() {
    return (
        <header className={styles.header}>
            <img
                src={lumeLogo}
                alt="Logo da LumeStack"
                data-qa="logo-img"
            />
        </header>
    )
}
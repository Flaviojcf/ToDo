import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
          <img src="/assets/Logo.png" alt="Imagem do Logo Todo" />
        </header>
    )
}
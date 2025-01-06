import { FiExternalLink } from 'react-icons/fi'
import styles from './FutaSection10.module.css'
export default function FutaSection10() {
    

    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <a href="https://fonts.google.com/specimen/Fira+Mono" target='_blank' rel='noreferrer'>Typography</a>
                <FiExternalLink />

            </div>
            <div className={styles.content}>
                <h2>Fira Mono</h2>
                <h3>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
                <h4>abcdefghijklmnopqrstuvqxyz</h4>
                <h4>0123456789!@#$%^&*()</h4>
            </div>

        </div>
    )
}
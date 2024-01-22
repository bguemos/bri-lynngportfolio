import styles from './Button.module.css'
import Link from 'next/link'



export default function Button({title, link}) {



    return (
        <>
        <div className={styles.button}>
            <Link className={styles.title} href={link}>{title}</Link>
        </div>
        
        
        </>
    )
}
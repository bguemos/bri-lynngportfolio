import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';




export default function Footer() {
  return (
    <>

    <div className={styles.main}>
    
    <div className={styles.logo}>
    <Link href="/">
    <Image
     src='/logo/bg.png'
     height={50}
     width={50}
     alt='logo'

    />
</Link>
    </div>


    <div className={styles.links}>
    <Link href="/" className={styles.link}>
    <h3 className={styles.page}>Home</h3>
    </Link>
    <Link href="#contact" className={styles.link} scroll={false}>
            <h3 className={styles.page}>Contact</h3>
          </Link>
          <Link href="#projects" className={styles.link} scroll={false}>
            <h3 className={styles.page}>Projects</h3>
          </Link>

    


  
</div>
</div>

    </>
   
)
}
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';



export default function Header() {

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
    <hr></hr>
            </>
           
        )
    }
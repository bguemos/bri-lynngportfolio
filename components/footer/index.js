import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';




export default function Footer() {
  return (
    
      <div className={styles.main}>



      <div className={styles.links}>
            <Link href="/" className={styles.link}>
            <h3 className={styles.page}>Home</h3>
            </Link>
    
            <Link href="/"  className={styles.link}>
            <h3 className={styles.page}>Projects</h3>
            </Link>
    
    
           
        </div>
   
     <div className={styles.socials}>

        <Image 
        src='/logo/git.png'
        height={35}
        width={35}
        alt='insta'
        />

      <Image 
        src='/logo/linked.png'
        height={35}
        width={35}
        alt='linked'
        />
      

     
   
      </div>
  
     
      </div>
 
  );
}
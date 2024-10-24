import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';




export default function Footer() {
  const router = useRouter();

  const handleNavigation = (hash) => {
   
    if (router.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
    
      router.push('/').then(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo/bg.png" height={50} width={50} alt="logo" />
          </Link>
        </div>

        <div className={styles.links}>
        
          <h3
            className={styles.page}
            onClick={() => handleNavigation('#home')}
          >
            Home
          </h3>
          <h3
            className={styles.page}
            onClick={() => handleNavigation('#contact')}
          >
            Contact
          </h3>
          <h3
            className={styles.page}
            onClick={() => handleNavigation('#projects')}
          >
            Projects
          </h3>
        </div>
      </div>
     
    </>
  );
}
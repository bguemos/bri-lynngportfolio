import styles from './Projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../buttons';

export default function Project({project}) {
 const { image, title, description, imageHeight, imageWidth , link } = project;

    return (
        <>
        <div className={styles.maincontent}>

            
            
            <div className={styles.gradient}>
            <Image
             src={image}
             height={imageHeight || 440}
             width={imageWidth || 540}
             alt='images'
             
            />
          


          
            
            </div>

            <h1>{title}</h1>
            <h3>{description}</h3>
           <div className={styles.button}>
           <Button title="Project Details" 
           link={link}
           />
            </div>
            </div>
        </>
    )
}
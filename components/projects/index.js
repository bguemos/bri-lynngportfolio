import styles from './Projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../buttons';

export default function Project({image, title, description, imageHeight, imageWidth }){

    return (
        <>
        <div className={styles.main}>

            
            
            <div className={styles.gradient}>
            <Image
             src={image}
             height={imageHeight || 440}
             width={imageWidth || 540}
             alt='images'
             
            />
          


          
            
            </div>

            <h1>{title}</h1>
            <div className={styles.describe}>
            <p>{description}</p>
            </div>
           <div className={styles.button}>
            <Button
            title="Project Details"
            link="/innersight"
            />
            </div>
            </div>
        </>
    )
}
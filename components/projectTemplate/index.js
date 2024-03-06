import Image from 'next/image';
import styles from './Project.module.css';

export default function ProjectTemplate({ image, description, title, header }) {
    return (
        <>
            <div className={styles.banner}>
                <Image src={image} alt="Banner Photo" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.content}>
                <h1>{title}</h1>
                <h2>{header}</h2>
                <p>{description}</p>
                {/* Add more content as needed */}
            </div>
        </>
    );
}
import styles from './Carousel.module.css';
import Link from 'next/link';

export default function Carousel() {
    const projects = [
        {
            image: '/projectImages/innersight24.jpg',
            title: 'Innersight',
            description: 'Mobile Application',
            link: '/innersight'
        },
        {
            image: '/projectImages/pagepal24.jpg',
            title: 'PagePal',
            description: 'Web Application',
            link: '/pagepal'
        },
        {
            image: '/projectImages/westpoint24.jpg',
            title: 'Westpoint Hotel',
            description: 'WordPress Website',
            link: '/westpoint'
        },
        {
            image: '/projectImages/borderless24.jpg',
            title: 'Borderless',
            description: 'Web Application',
            link: '/borderless'
        },
        {
            image: '/projectImages/rescueradar24.jpg',
            title: 'RescueRadar',
            description: 'Web Application',
            link: '/rescueradar'
        },
    ];

    return (
        <div className={styles.gridContainer}>
            {projects.map((project, index) => (
                <Link href={project.link} key={index} passHref>
                    <div className={styles.projectItem}>
                        <img
                            src={project.image}
                            alt={project.title}
                        />
                        <div className={styles.titleOverlay}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
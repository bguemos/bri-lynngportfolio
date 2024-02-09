import styles from './Carousel.module.css';
import Project from '../projects';

export default function Carousel() {
    const projects = [
        {
            image: '/projectImages/innersightphones.png',
            title: 'innersight',
            description: 'Mobile Application',
            imageHeight: 200,
            imageWidth: 200,
            link: '/innersight'
        },
        {
            image: '/projectImages/pagepal.png',
            title: 'PagePal',
            description: 'Web Application',
            imageHeight: 200,
            imageWidth: 300,
            link: '/pagepal'
        },
        {
            image: '/projectImages/westpoint.png',
            imageHeight: 200,
            imageWidth: 300,
            title: 'Westpoint Hotel',
            description: 'Wordpress Website',
            link: '/westpoint'
        },
        {
            image: '/projectImages/borderless.png',
            imageHeight: 200,
            imageWidth: 200,
            title: 'Borderless',
            description: 'Web Application',
            link: '/borderless'
        },
    ];

    return (
        <div className={styles.gridContainer}>
            {projects.map((project, index) => (
                <div className={styles.projectItem} key={index}>
                    <Project
                        key={index}
                        project={project}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        imageHeight={project.imageHeight}
                        imageWidth={project.imageWidth}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
}

    
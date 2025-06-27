import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import {
    useScrollAnimation,
    projectStaggerContainer,
    projectStaggerItem,
    contentStaggerVariants,
} from '../hooks/useScrollAnimation';
import AnimatedElement from './AnimatedElement';
import ProjectMockup from './ProjectMockup';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <section
            id='projects'
            className='bg-gradient-to-b from-slate-400 to-slate-600 py-20'
        >
            <div className='align-element'>
                <AnimatedElement animation='fadeInUp'>
                    <SectionTitle text='featured projects' />
                </AnimatedElement>
                <motion.div
                    ref={ref}
                    className='py-16 lg:px-10 flex flex-col gap-16'
                    variants={projectStaggerContainer}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.article
                                key={project.id}
                                variants={projectStaggerItem}
                                className='relative grid lg:grid-cols-2 gap-8 items-center'
                            >
                                {/* Device Mockup */}
                                <ProjectMockup
                                    image={project.img}
                                    mobileImg={project.mobileImg}
                                    title={project.title}
                                    isEven={isEven}
                                />

                                {/* Project Content */}
                                <ProjectsCard
                                    project={project}
                                    isEven={isEven}
                                    inView={inView}
                                    contentStaggerVariants={
                                        contentStaggerVariants
                                    }
                                />
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

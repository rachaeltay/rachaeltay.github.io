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
            className='bg-slate-900 py-32 relative overflow-hidden'
        >
            <div className='absolute top-1/4 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full'></div>
            <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-slate-600/10 blur-[120px] rounded-full'></div>

            <div className='align-element relative z-10'>
                <AnimatedElement animation='fadeInUp'>
                    <SectionTitle text='Featured Projects' />
                </AnimatedElement>

                <motion.div
                    ref={ref}
                    className='py-24 flex flex-col gap-32 lg:gap-48'
                    variants={projectStaggerContainer}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, _) => {
                        return (
                            <motion.article
                                key={project.id}
                                variants={projectStaggerItem}
                                className={`grid lg:grid-cols-12 gap-8 lg:gap-0 items-center`}
                            >
                                <div
                                    className={`lg:col-span-8 lg:col-start-1 lg:order-1`}
                                >
                                    <ProjectMockup
                                        image={project.img}
                                        mobileImg={project.mobileImg}
                                        title={project.title}
                                        isEven={true}
                                    />
                                </div>

                                <div
                                    className={`lg:col-span-6 lg:col-start-7 lg:order-2 relative z-20 lg:-ml-12`}
                                >
                                    <ProjectsCard
                                        project={project}
                                        isEven={true}
                                        inView={inView}
                                        contentStaggerVariants={
                                            contentStaggerVariants
                                        }
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

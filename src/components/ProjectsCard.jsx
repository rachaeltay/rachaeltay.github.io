import { motion } from 'framer-motion';
import { itemVariants } from '../hooks/useScrollAnimation';

const ProjectsCard = ({ project, isEven, inView, contentStaggerVariants }) => {
    return (
        <>
            {/* Desktop Content Section */}
            <motion.div
                className={`relative z-10 hidden lg:block ${
                    isEven ? 'lg:order-2 lg:-ml-16' : 'lg:order-1 lg:-mr-16'
                }`}
                variants={contentStaggerVariants}
                initial='initial'
                animate={inView ? 'visible' : 'initial'}
            >
                <div
                    className={`text-center ${
                        isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                >
                    <motion.h2
                        className='text-3xl font-bold mb-4 capitalize text-text-dark'
                        variants={itemVariants}
                    >
                        {project.title}
                    </motion.h2>
                    <motion.div
                        className='text-text-secondary leading-relaxed mb-8 text-lg bg-bg-muted-dark p-6 rounded-lg shadow-lg'
                        variants={itemVariants}
                    >
                        {project.text}
                    </motion.div>
                    <motion.p
                        className={`text-text-muted mb-6 text-lg font-medium flex flex-wrap gap-4 ${
                            isEven ? 'justify-end' : 'justify-start'
                        }`}
                        variants={itemVariants}
                    >
                        {project.techlist?.map((tech, techIndex) => (
                            <motion.span
                                key={techIndex}
                                className='text-text-muted hover:text-text-secondary transition-colors duration-300'
                                variants={itemVariants}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.p>

                    <motion.div
                        className={`hidden lg:flex gap-x-4 ${
                            isEven ? 'justify-end' : 'justify-start'
                        }`}
                        variants={itemVariants}
                    >
                        {project.url && (
                            <a
                                href={project.url}
                                target='_blank'
                                className='text-text-muted hover:text-accent transition-colors duration-300'
                            >
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </a>
                        )}
                        <a
                            href={project.github}
                            target='_blank'
                            className='text-text-muted hover:text-accent transition-colors duration-300'
                        >
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mobile Content Overlay */}
            <motion.div
                className='lg:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg'
                variants={contentStaggerVariants}
                initial='initial'
                animate={inView ? 'visible' : 'initial'}
            >
                <div className='absolute bottom-0 left-0 right-0 p-6 text-text-secondary'>
                    <motion.h2
                        className='text-2xl font-bold mb-2 capitalize'
                        variants={itemVariants}
                    >
                        {project.title}
                    </motion.h2>
                    <motion.div
                        className='text-text-muted-light mb-4 text-sm leading-relaxed'
                        variants={itemVariants}
                    >
                        {project.text}
                    </motion.div>
                    <motion.div
                        className='flex flex-wrap gap-2 mb-4'
                        variants={itemVariants}
                    >
                        {project.techlist?.map((tech, techIndex) => (
                            <motion.span
                                key={techIndex}
                                className='text-text-muted-light text-sm'
                                variants={itemVariants}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        className='flex gap-x-4'
                        variants={itemVariants}
                    >
                        {project.url && (
                            <a
                                href={project.url}
                                target='_blank'
                                className='text-text-muted hover:text-accent transition-colors duration-300'
                            >
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </a>
                        )}
                        <a
                            href={project.github}
                            target='_blank'
                            className='text-text-muted-light hover:text-accent transition-colors duration-300'
                        >
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectsCard;

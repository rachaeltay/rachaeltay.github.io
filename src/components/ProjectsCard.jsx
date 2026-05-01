import { motion } from 'framer-motion';
import { itemVariants } from '../hooks/useScrollAnimation';

const ProjectsCard = ({ project, isEven, inView, contentStaggerVariants }) => {
    return (
        <motion.div
            className={`relative p-8 lg:p-12 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 shadow-2xl ${
                isEven ? 'lg:text-left' : 'lg:text-right'
            }`}
            variants={contentStaggerVariants}
            initial='initial'
            animate={inView ? 'visible' : 'initial'}
        >
            <motion.h2
                className='text-4xl lg:text-5xl font-bold mb-6 text-white'
                variants={itemVariants}
            >
                {project.title}
            </motion.h2>

            <motion.div
                className='text-text-secondary leading-relaxed mb-8 text-lg'
                variants={itemVariants}
            >
                {project.text}
            </motion.div>

            {project.challenge && (
                <motion.div
                    className={`mb-8 p-4 rounded-lg bg-slate-900/50 border-l-2 border-accent ${
                        isEven ? 'text-left' : 'text-right'
                    }`}
                    variants={itemVariants}
                >
                    <span className='font-bold text-accent block mb-2 uppercase text-xs tracking-widest'>
                        Technical Challenge
                    </span>
                    <p className='text-sm italic text-text-secondary-dark leading-relaxed'>
                        "{project.challenge}"
                    </p>
                </motion.div>
            )}

            <motion.div
                className={`flex flex-wrap gap-3 mb-10 ${
                    isEven ? 'justify-start' : 'justify-end'
                }`}
                variants={itemVariants}
            >
                {project.techlist?.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        className='px-3 py-1 rounded-full bg-slate-700/50 text-accent text-xs font-semibold border border-slate-600/50'
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>

            <motion.div
                className={`flex gap-x-6 ${
                    isEven ? 'justify-start' : 'justify-end'
                }`}
                variants={itemVariants}
            >
                {project.url && (
                    <a
                        href={project.url}
                        target='_blank'
                        className='text-text-secondary hover:text-accent transition-all duration-300 flex items-center gap-2 group'
                    >
                        <span className='text-sm font-bold uppercase tracking-widest'>
                            Live Demo
                        </span>
                        <svg
                            className='h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                        </svg>
                    </a>
                )}
                <a
                    href={project.github}
                    target='_blank'
                    className='text-text-secondary hover:text-accent transition-all duration-300 flex items-center gap-2 group'
                >
                    <span className='text-sm font-bold uppercase tracking-widest'>
                        Source Code
                    </span>
                    <svg
                        className='h-5 w-5'
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
        </motion.div>
    );
};

export default ProjectsCard;

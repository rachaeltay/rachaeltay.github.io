import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text, techlist, index }) => {
    const isEven = index % 2 === 0;

    return (
        <article className='relative grid lg:grid-cols-2 gap-8 items-center'>
            {/* Image Section */}
            <div
                className={`relative group overflow-hidden shadow-lg hover:shadow-xl duration-300 rounded-lg lg:rounded-none ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
            >
                <img
                    src={img}
                    alt={title}
                    className='w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105'
                />

                {/* Default Accent Overlay */}
                <div className='absolute inset-0 bg-primary/20 transition-opacity duration-300 group-hover:opacity-0'></div>

                {/* Mobile/Tablet Overlay - Always Visible */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:hidden'>
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-text-secondary'>
                        <h2 className='text-2xl font-bold mb-2 capitalize'>
                            {title}
                        </h2>
                        <div className='text-text-muted-light mb-4 text-sm leading-relaxed'>
                            {text}
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {techlist.map((tech, index) => (
                                <span
                                    key={index}
                                    className='text-text-muted-light text-sm'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-x-4'>
                            {url && (
                                <a
                                    href={url}
                                    target='_blank'
                                    className='text-text-muted hover:text-accent transition-colors duration-300'
                                >
                                    <TbWorldWww className='h-6 w-6' />
                                </a>
                            )}
                            <a
                                href={github}
                                target='_blank'
                                className='text-text-muted-light hover:text-accent transition-colors duration-300'
                            >
                                <FaGithubSquare className='h-6 w-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Content Section */}
            <div
                className={`relative z-10 hidden lg:block ${
                    isEven ? 'lg:order-2 lg:-ml-16' : 'lg:order-1 lg:-mr-16'
                }`}
            >
                <div
                    className={`text-center ${
                        isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                >
                    <h2 className='text-3xl font-bold mb-4 capitalize text-text-dark'>
                        {title}
                    </h2>
                    <div className='text-text-secondary leading-relaxed mb-8 text-lg bg-bg-muted-dark p-6 rounded-lg shadow-lg'>
                        {text}
                    </div>
                    <p
                        className={`text-text-muted mb-6 text-lg font-medium flex flex-wrap gap-4 ${
                            isEven ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {techlist.map((tech, index) => (
                            <span
                                key={index}
                                className='text-text-muted hover:text-text-secondary transition-colors duration-300'
                            >
                                {tech}
                            </span>
                        ))}
                    </p>

                    {/* Desktop Icons */}
                    <div
                        className={`hidden lg:flex gap-x-4 ${
                            isEven ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {url && (
                            <a
                                href={url}
                                target='_blank'
                                className='text-text-muted hover:text-accent transition-colors duration-300'
                            >
                                <TbWorldWww className='h-6 w-6' />
                            </a>
                        )}
                        <a
                            href={github}
                            target='_blank'
                            className='text-text-muted hover:text-accent transition-colors duration-300'
                        >
                            <FaGithubSquare className='h-6 w-6' />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};
export default ProjectsCard;

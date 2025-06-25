import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return (
        <div
            id='projects'
            className='bg-gradient-to-b from-slate-400 to-slate-300 py-20'
        >
            <section className='align-element'>
                <SectionTitle text='web creations' />
                <div className='py-16 lg:px-10 flex flex-col gap-16'>
                    {projects.map((project, index) => {
                        return (
                            <ProjectsCard
                                key={project.id}
                                {...project}
                                index={index}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
export default Projects;

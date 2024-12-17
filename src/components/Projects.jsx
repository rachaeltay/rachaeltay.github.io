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
                <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-2 gap-3'>
                    {projects.map((project) => {
                        return <ProjectsCard key={project.id} {...project} />;
                    })}
                </div>
            </section>
        </div>
    );
};
export default Projects;

import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
    return (
        <div
            id='skills'
            className='bg-gradient-to-b from-slate-600 to-slate-500 py-20'
        >
            <section className='align-element'>
                <SectionTitle text='tech stack' />
                <div className='flex flex-wrap justify-center gap-2 pt-10 my-12'>
                    {skills.map((skill) => {
                        return <SkillsCard key={skill.id} {...skill} />;
                    })}
                </div>
            </section>
        </div>
    );
};
export default Skills;

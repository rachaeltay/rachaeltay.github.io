import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import { motion } from 'framer-motion';
import {
    useScrollAnimation,
    staggerContainer,
    staggerItem,
} from '../hooks/useScrollAnimation';
import AnimatedElement from './AnimatedElement';

const Skills = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <div
            id='skills'
            className='bg-gradient-to-b from-slate-600 to-slate-500 py-20'
        >
            <section className='align-element'>
                <AnimatedElement animation='fadeInUp'>
                    <SectionTitle text='tech stack' />
                </AnimatedElement>
                <motion.div
                    ref={ref}
                    className='flex flex-wrap justify-center gap-2 pt-10 my-12'
                    variants={staggerContainer}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skills.map((skill, index) => (
                        <motion.div key={skill.id} variants={staggerItem}>
                            <SkillsCard {...skill} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};
export default Skills;

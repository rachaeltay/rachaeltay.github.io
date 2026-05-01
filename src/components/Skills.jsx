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

    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    const categories = Object.keys(groupedSkills);

    return (
        <div id='skills' className='bg-slate-900 py-24 relative'>
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent'></div>

            <section className='align-element'>
                <AnimatedElement animation='fadeInUp'>
                    <SectionTitle text='Core Competencies' />
                </AnimatedElement>

                <div className='flex flex-col gap-16 mt-20'>
                    {categories.map((category) => (
                        <div
                            key={category}
                            className='grid lg:grid-cols-12 gap-8 items-start'
                        >
                            <motion.div
                                className='lg:col-span-3'
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                    inView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -20 }
                                }
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className='text-accent uppercase tracking-[0.2em] text-[10px] font-bold border-l-2 border-accent/30 pl-4 py-1'>
                                    {category}
                                </h3>
                            </motion.div>

                            <motion.div
                                ref={ref}
                                className='lg:col-span-9 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'
                                variants={staggerContainer}
                                initial='hidden'
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                {groupedSkills[category].map((skill) => (
                                    <motion.div
                                        key={skill.id}
                                        variants={staggerItem}
                                    >
                                        <SkillsCard {...skill} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Skills;

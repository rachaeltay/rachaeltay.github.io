import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation, hoverScale } from '../hooks/useScrollAnimation';
import profilePic from '../assets/images/catprofile.png';

const About = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <section
            className='bg-gradient-to-b from-slate-500 to-slate-400 py-20'
            id='about'
        >
            <div className='align-element grid md:grid-cols-2 items-center gap-6 px-10'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                        inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        className='rounded-full py-8 px-8 md:py-16 md:px-16 w-full h-full object-cover'
                        src={profilePic}
                        {...hoverScale}
                    />
                </motion.div>
                <motion.article
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <SectionTitle text='code and me' />
                    <p className='text-text-dark mt-8 leading-loose'>
                        Hello, I'm Rachael Tay, a dedicated software engineer
                        focused on creating seamless user experiences and
                        leveraging cutting-edge technologies. I'm driven by a
                        genuine passion for continuous learning and exploring
                        new technologies. As a lifelong learner, I embrace
                        opportunities to expand my skills. Beyond building
                        applications, I also find joy in crafting custom
                        mechanical keyboards!
                    </p>
                </motion.article>
            </div>
        </section>
    );
};
export default About;

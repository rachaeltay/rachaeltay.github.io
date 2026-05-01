import { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profilePic from '../assets/images/catprofile.png';

const About = () => {
    const { ref, inView } = useScrollAnimation();
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section
            className='bg-slate-900 py-32 relative overflow-hidden'
            id='about'
        >
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent'></div>

            <div className='align-element grid lg:grid-cols-12 gap-12 lg:gap-24 items-center'>
                <div className='lg:col-span-5' ref={ref}>
                    <motion.div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setOpacity(1)}
                        onMouseLeave={() => setOpacity(0)}
                        className='relative p-4 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden'
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className='pointer-events-none absolute -inset-px z-0 transition-opacity duration-300'
                            style={{
                                opacity,
                                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(4, 217, 255, 0.8), transparent 20%)`,
                            }}
                        />

                        <img
                            className='relative z-10 rounded-xl w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700'
                            src={profilePic}
                            alt='Rachael Tay'
                        />
                    </motion.div>
                </div>

                <motion.article
                    className='lg:col-span-7'
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <SectionTitle text='The Engineer Behind the Code' />

                    <div className='mt-10 space-y-6'>
                        <p className='text-text-primary text-xl font-medium leading-relaxed font-display'>
                            I view software as a craft where architectural
                            integrity and usability are inseparable.
                        </p>

                        <p className='text-text-secondary text-lg leading-relaxed'>
                            With 4+ years of experience, I focus on building
                            systems that are as maintainable under the hood as
                            they are intuitive on the surface. My approach is
                            rooted in clean code, architectural scalability, and
                            a belief that the best user experiences are
                            engineered, not just designed.
                        </p>

                        <p className='text-text-secondary text-lg leading-relaxed'>
                            Beyond the technical architecture, I have a genuine
                            passion for continuous learning and exploring new
                            technologies. When I'm not orchestrating
                            applications, you'll likely find me crafting custom
                            mechanical keyboards or geeking out over interactive
                            design patterns.
                        </p>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};
export default About;

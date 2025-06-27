import { motion } from 'framer-motion';
import { useScrollAnimation, hoverScale } from '../hooks/useScrollAnimation';
import AnimatedElement from './AnimatedElement';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/popupcat.json';

const Footer = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <footer className='bg-gradient-to-b from-slate-600 to-slate-700 py-16 relative overflow-hidden'>
            <div className='align-element relative z-10'>
                <motion.div
                    ref={ref}
                    className='flex flex-col md:flex-row justify-between items-center gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8 }}
                >
                    <AnimatedElement animation='fadeInLeft' delay={0.2}>
                        <h4 className='text-text-primary text-xl font-semibold'>
                            Let's connect
                        </h4>
                        <p className='text-text-secondary mt-2'>
                            Always up for a chat about tech, cats, or anything
                            interesting!
                        </p>
                    </AnimatedElement>

                    <AnimatedElement animation='fadeInRight' delay={0.4}>
                        <motion.a
                            href='mailto:rachael.tay@example.com'
                            className='inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors duration-300 shadow-lg hover:shadow-xl'
                            {...hoverScale}
                        >
                            Get In Touch
                        </motion.a>
                    </AnimatedElement>
                </motion.div>

                <AnimatedElement
                    animation='fadeInUp'
                    delay={0.6}
                    className='border-t border-slate-500 mt-8 pt-8 text-center'
                >
                    <p className='text-text-secondary'>
                        © {new Date().getFullYear()} Rachael Tay. All rights
                        reserved.
                    </p>
                </AnimatedElement>
            </div>

            {/* Lottie positioned behind the content */}
            <div className='absolute inset-0 flex justify-center items-center pointer-events-none z-0'>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: '100%', width: 'auto', maxWidth: '50%' }}
                />
            </div>
        </footer>
    );
};
export default Footer;

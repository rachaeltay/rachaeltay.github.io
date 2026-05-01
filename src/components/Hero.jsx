import { FaLinkedin, FaGithub } from 'react-icons/fa';
import LottieView from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { hoverScale } from '../hooks/useScrollAnimation';
import animationData from '../assets/lottie/whiteblackcat.json';

const Hero = () => {
    return (
        <div
            id='intro'
            className='relative overflow-hidden bg-slate-900 py-32 lg:py-48'
        >
            <div className='absolute inset-0 z-0 opacity-30'>
                <div className='absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-accent blur-[220px]'></div>
                <div className='absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-slate-600 blur-[220px]'></div>
            </div>

            <div className='align-element relative z-10 grid md:grid-cols-2 items-center gap-12 lg:gap-24'>
                <article>
                    <motion.h1
                        className='text-text-primary text-6xl lg:text-8xl font-bold tracking-tight'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Rachael Tay
                    </motion.h1>

                    <motion.div
                        className='mt-6 text-2xl lg:text-4xl text-text-primary font-medium tracking-tight'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2000,
                                'UX Builder',
                                2000,
                                'Bongo Cat Lover',
                                2000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='text-accent'
                        />
                    </motion.div>

                    <motion.p
                        className='mt-8 text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        Crafting resilient architectures and high-fidelity
                        interfaces. 4+ years of building for the web with a
                        meticulous eye for detail, performance, and
                        maintainability.
                    </motion.p>

                    <motion.div
                        className='flex gap-x-6 mt-10'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <motion.a
                            href='https://github.com/rachaeltay'
                            {...hoverScale}
                            className='group relative'
                        >
                            <div className='absolute -inset-2 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300'></div>
                            <FaGithub className='h-8 w-8 text-text-muted hover:text-accent transition-colors duration-300 relative z-10' />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/rachael-tay-/'
                            target='_blank'
                            {...hoverScale}
                            className='group relative'
                        >
                            <div className='absolute -inset-2 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300'></div>
                            <FaLinkedin className='h-8 w-8 text-text-muted hover:text-accent transition-colors duration-300 relative z-10' />
                        </motion.a>
                    </motion.div>
                </article>

                <motion.div
                    className='relative hidden md:block'
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <div className='absolute inset-0 rounded-full border border-accent/40 animate-[spin_20s_linear_infinite]'></div>
                    <div className='absolute inset-8 rounded-full border border-slate-700/80 animate-[spin_15s_linear_infinite_reverse]'></div>

                    <div className='relative z-10 p-4'>
                        <LottieView
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className='w-[1px] h-24 bg-gradient-to-b from-accent to-transparent'></div>
            </motion.div>
        </div>
    );
};
export default Hero;

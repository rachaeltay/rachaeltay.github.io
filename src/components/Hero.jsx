import { FaLinkedin, FaGithub } from 'react-icons/fa';
import LottieView from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useScrollAnimation, hoverScale } from '../hooks/useScrollAnimation';
import AnimatedElement from './AnimatedElement';
import animationData from '../assets/lottie/whiteblackcat.json';

const Hero = () => {
    const { ref, inView } = useScrollAnimation();

    return (
        <div
            id='intro'
            className='bg-gradient-to-b from-primary to-slate-600 py-24'
        >
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <AnimatedElement animation='fadeInLeft' as='article'>
                    <h1 className='text-text-primary text-7xl font-bold tracking-wider'>
                        Rachael Tay
                    </h1>
                    <p className='mt-4 text-3xl text-text-primary capitalize tracking-wide'>
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
                    </p>
                    <AnimatedElement animation='fadeInUp' delay={0.4}>
                        <p className='mt-4 text-text-secondary leading-relaxed'>
                            I'm a frontend engineer with a passion for
                            intuitive, responsive design. Lately, I've been
                            taking on freelance projects for SMEs to stay sharp
                            and explore new challenges.
                        </p>
                    </AnimatedElement>
                    <AnimatedElement animation='fadeInUp' delay={0.6}>
                        <div className='flex gap-x-4 mt-4'>
                            <motion.a
                                href='https://github.com/rachaeltay'
                                {...hoverScale}
                            >
                                <FaGithub className='h-8 w-8 text-text-muted hover:text-accent duration-300' />
                            </motion.a>
                            <motion.a
                                href='https://www.linkedin.com/in/rachael-tay-/'
                                target='_blank'
                                {...hoverScale}
                            >
                                <FaLinkedin className='h-8 w-8 text-text-muted hover:text-accent duration-300' />
                            </motion.a>
                        </div>
                    </AnimatedElement>
                </AnimatedElement>

                <AnimatedElement
                    animation='fadeInRight'
                    delay={0.2}
                    className=' md:block'
                >
                    <LottieView
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                    />
                </AnimatedElement>
            </div>
        </div>
    );
};
export default Hero;

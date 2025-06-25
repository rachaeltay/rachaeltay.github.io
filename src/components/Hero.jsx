import { FaLinkedin, FaGithub } from 'react-icons/fa';
import LottieView from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import animationData from '../assets/lottie/whiteblackcat.json';
import gitcat from '../assets/lottie/gitcat.json';

const Hero = () => {
    return (
        <div
            id='intro'
            className='bg-gradient-to-b from-primary to-slate-600 py-24'
        >
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-text-primary text-6xl font-bold tracking-wider'>
                        Rachael Tay
                    </h1>
                    <p className='mt-4 text-xl text-text-secondary capitalize tracking-wide'>
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
                    <p className='mt-4 text-text-secondary tracking-wide'>
                        I'm a frontend engineer with a passion for intuitive,
                        responsive design. Lately, I've been taking on freelance
                        projects for SMEs to stay sharp and explore new
                        challenges.
                    </p>
                    <div className='flex gap-x-4 mt-4' target='_blank'>
                        <a href='https://github.com/rachaeltay'>
                            {/* <LottieView
                                animationData={gitcat}
                                loop={true}
                                autoplay={true}
                                style={{ height: 30 }}
                            /> */}
                            <FaGithub className='h-8 w-8 text-text-muted hover:text-text-secondary duration-300' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/rachael-tay-/'
                            target='_blank'
                        >
                            <FaLinkedin className='h-8 w-8 text-text-muted hover:text-text-secondary duration-300' />
                        </a>
                    </div>
                </article>
                <article className='md:block'>
                    <LottieView
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                    />
                </article>
            </div>
        </div>
    );
};
export default Hero;

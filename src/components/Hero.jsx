import { FaLinkedin } from 'react-icons/fa';
import LottieView from 'lottie-react';
import animationData from '../assets/lottie/whiteblackcat.json';
import gitcat from '../assets/lottie/gitcat.json';

const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-slate-700 to-slate-600 py-24'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-white text-7xl font-bold tracking-wider'>
                        Rachael Tay
                    </h1>
                    <p className='mt-4 text-3xl text-white capitalize tracking-wide'>
                        Software Engineer
                    </p>
                    <p className='mt-2 text-lg text-slate-200 capitalize tracking-wide'>
                        Bongo cat lover
                    </p>
                    <div className='flex gap-x-4 mt-4' target='_blank'>
                        <a href='https://github.com/rachaeltay'>
                            <LottieView
                                animationData={gitcat}
                                loop={true}
                                autoplay={true}
                                style={{ height: 30 }}
                            />
                            {/* <FaGithubSquare className='h-8 w-8 text-gray-400 hover:text-sky-600 duration-300' /> */}
                        </a>
                        <a
                            href='https://www.linkedin.com/in/rachael-tay-/'
                            target='_blank'
                        >
                            <FaLinkedin className='h-8 w-8 text-gray-400 hover:text-sky-600 duration-300' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
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

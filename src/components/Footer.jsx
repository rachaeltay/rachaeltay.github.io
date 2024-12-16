import Lottie from 'lottie-react';
import animationData from '../assets/lottie/popupcat.json';

const Footer = () => {
    return (
        <footer className='bg-slate-100 pt-20 text-center'>
            <div
                className='-mb-64 px-10'
                style={{ zIndex: 2, position: 'relative' }}
            >
                <h1 className='text-3xl font-medium tracking-wider capitalize p-5'>
                    Get in touch
                </h1>
                <span className='w-5/6'>
                    I'm open to full-time opportunities! Whether you have a
                    position available or simply want to connect, feel free to
                    reach out to me{' '}
                    <a
                        className='text-sky-600 cursor-pointer'
                        href='mailto:rachael.tay22@gmail.com'
                        aria-label='Email'
                    >
                        here
                    </a>
                    .
                </span>
            </div>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 400, zIndex: 1, position: 'relative' }}
            />
        </footer>
    );
};
export default Footer;

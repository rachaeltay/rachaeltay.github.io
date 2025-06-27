import Lottie from 'lottie-react';
import animationData from '../assets/lottie/popupcat.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-slate-300 pt-20 text-center'>
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
                </span>
                <br />
                <a
                    className='inline-block mt-5 bg-muted-dark text-text-primary px-4 py-2 rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg'
                    href='mailto:rachael.tay22@gmail.com'
                    aria-label='Email'
                >
                    Say Hello
                </a>
                <p className='text-text-muted py-5 italic'>
                    Designed and built by{' '}
                    <a
                        className='cursor-pointer hover:text-primary transition-colors duration-300'
                        href='https://github.com/rachael-tay'
                    >
                        Rachael Tay
                    </a>
                </p>
            </div>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 400, zIndex: 1, position: 'relative' }}
            />

            {/* Copyright Section */}
            <div className='relative z-10 py-4'>
                <div className='align-element'>
                    <p className='text-text-dark text-sm'>
                        © {currentYear} Rachael Tay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

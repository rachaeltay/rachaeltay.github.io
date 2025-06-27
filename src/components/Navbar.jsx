import { useState } from 'react';
import { links } from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/rcon.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className='bg-primary'>
                <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 sm:justify-between'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img
                                src={logo}
                                alt='logo'
                                className='w-10 h-10 transition-all duration-500 ease-out hover:drop-shadow-lg hover:drop-shadow-accent/50 cursor-pointer hover:animate-wiggle'
                            />
                        </div>
                        <button
                            onClick={toggleMenu}
                            className='sm:hidden text-text-primary hover:text-accent transition-colors duration-300'
                        >
                            {isMenuOpen ? (
                                <FaTimes className='h-6 w-6' />
                            ) : (
                                <FaBars className='h-6 w-6' />
                            )}
                        </button>
                    </div>

                    <div className='hidden sm:flex gap-x-6'>
                        {links.map((link, index) => {
                            const { id, href, text } = link;
                            return (
                                <a
                                    key={id}
                                    href={href}
                                    className='group capitalize text-lg tracking-wide text-text-primary hover:text-accent duration-300'
                                >
                                    <span className='text-accent group-hover:text-accent'>
                                        0{index + 1}.
                                    </span>{' '}
                                    <span className='text-text-primary group-hover:text-accent'>
                                        {text}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/50 z-40 sm:hidden'
                    onClick={closeMenu}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='p-6'>
                    <div className='flex justify-between items-center mb-8'>
                        <img
                            src={logo}
                            alt='logo'
                            className='w-8 h-8 transition-all duration-500 ease-out hover:drop-shadow-lg hover:drop-shadow-accent/50 cursor-pointer hover:animate-wiggle'
                        />
                        <button
                            onClick={closeMenu}
                            className='text-text-primary hover:text-accent transition-colors duration-300'
                        >
                            <FaTimes className='h-5 w-5' />
                        </button>
                    </div>

                    <div className='flex flex-col gap-y-6'>
                        {links.map((link, index) => {
                            const { id, href, text } = link;
                            return (
                                <a
                                    key={id}
                                    href={href}
                                    onClick={closeMenu}
                                    className='capitalize text-lg tracking-wide text-text-primary duration-300 flex items-center'
                                >
                                    <span className='text-accent mr-2'>
                                        0{index + 1}.
                                    </span>
                                    <span className='text-text-primary'>
                                        {text}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;

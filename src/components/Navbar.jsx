import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/rcon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#intro', text: 'home' },
        { href: '#about', text: 'about' },
        { href: '#skills', text: 'skills' },
        { href: '#projects', text: 'projects' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-800/95 backdrop-blur-sm shadow-lg'
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='align-element py-4'>
                <div className='flex justify-between items-center'>
                    <motion.div
                        className='text-2xl font-bold text-text-primary'
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -10, 10, 0],
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            rotate: { duration: 0.5 },
                        }}
                    >
                        <a
                            href='#intro'
                            className='hover:text-accent transition-colors duration-300'
                        >
                            <img
                                src={logo}
                                alt='logo'
                                className='w-10 h-10 transition-all duration-500 ease-out hover:drop-shadow-lg hover:drop-shadow-accent/50 cursor-pointer'
                            />
                        </a>
                    </motion.div>

                    <div className='hidden md:flex space-x-8'>
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className='text-text-primary hover:text-accent transition-colors duration-300 relative group'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                {link.text}
                                <motion.span
                                    className='absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full'
                                    whileHover={{ width: '100%' }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        className='md:hidden text-text-primary hover:text-accent transition-colors duration-300'
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode='wait'>
                            {isOpen ? (
                                <motion.div
                                    key='close'
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaTimes size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key='menu'
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaBars size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='md:hidden'
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className='py-4 space-y-4'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className='block text-text-primary hover:text-accent transition-colors duration-300 text-lg font-medium'
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.text}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;

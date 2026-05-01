import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/rcon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['intro', 'skills', 'about', 'projects'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);

        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: 'smooth',
            });

            // Clean up hash to prevent jump-back on refresh
            window.history.replaceState(null, '', window.location.pathname);
            setIsOpen(false);
        }
    };

    const navLinks = [
        { href: '#intro', id: 'intro', text: 'home' },
        { href: '#skills', id: 'skills', text: 'skills' },
        { href: '#about', id: 'about', text: 'about' },
        { href: '#projects', id: 'projects', text: 'projects' },
    ];

    return (
        <motion.nav
            className='fixed top-6 w-full z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className='max-w-fit mx-auto'>
                <div
                    className={`flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-500 ${
                        isScrolled
                            ? 'bg-slate-900/80 backdrop-blur-md border-slate-700/50 shadow-2xl'
                            : 'bg-slate-900/40 backdrop-blur-sm border-transparent'
                    }`}
                >
                    <motion.a
                        href='#intro'
                        onClick={(e) => handleNavLinkClick(e, '#intro')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src={logo}
                            alt='logo'
                            className='w-8 h-8 hover:drop-shadow-[0_0_8px_rgba(4,217,255,0.5)] transition-all'
                        />
                    </motion.a>

                    <div className='hidden md:flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavLinkClick(e, link.href)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                                    activeSection === link.id
                                        ? 'text-accent'
                                        : 'text-text-secondary hover:text-white'
                                }`}
                                whileHover={{ y: -1 }}
                            >
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId='nav-pill'
                                        className='absolute inset-0 bg-accent/10 border border-accent/20 rounded-full'
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: 0.6,
                                        }}
                                    />
                                )}
                                <span className='relative z-10'>
                                    {link.text}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <button
                        className='md:hidden text-text-primary p-1'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className='absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:hidden shadow-2xl'
                    >
                        <div className='flex flex-col gap-4'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavLinkClick(e, link.href)
                                    }
                                    className='text-xl font-display font-medium text-text-primary hover:text-accent transition-colors'
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            href: 'https://github.com/rachaeltay',
            icon: <FaGithub />,
            label: 'GitHub',
        },
        {
            href: 'https://www.linkedin.com/in/rachael-tay-/',
            icon: <FaLinkedin />,
            label: 'LinkedIn',
        },
        {
            href: 'mailto:rachael.tay22@gmail.com',
            icon: <FaEnvelope />,
            label: 'Email',
        },
    ];

    return (
        <footer className='bg-slate-950 py-24 relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent'></div>

            <div className='align-element flex flex-col items-center gap-12 relative z-10'>
                <div className='flex flex-col items-center gap-6'>
                    <motion.h2
                        className='text-3xl lg:text-5xl font-bold text-white tracking-tight font-display text-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Let's build something exceptional.
                    </motion.h2>
                    <p className='text-text-secondary-dark text-center max-w-md text-lg'>
                        Up for a chat about tech or cats!
                    </p>
                </div>

                <div className='flex gap-6'>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 shadow-xl group'
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className='text-2xl transform group-hover:scale-110 transition-transform duration-300 block'>
                                {link.icon}
                            </span>
                        </motion.a>
                    ))}
                </div>

                <div className='flex flex-col items-center gap-6 border-t border-slate-900 pt-12 w-full'>
                    <p className='text-text-muted text-xs font-medium tracking-[0.3em] uppercase'>
                        © {currentYear} Rachael Tay
                    </p>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full'></div>
            <div className='absolute top-0 left-0 w-64 h-64 bg-slate-800/10 blur-[100px] rounded-full'></div>
        </footer>
    );
};

export default Footer;

import { motion } from 'framer-motion';

const ProjectMockup = ({ image, mobileImg, title, isEven }) => {
    const mobileImage = mobileImg || image;

    return (
        <div className='relative w-full group'>
            <motion.div
                className='relative z-10'
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    className='relative bg-slate-800 rounded-xl p-3 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] border border-slate-700/50'
                    whileHover={{
                        rotateY: isEven ? 5 : -5,
                        rotateX: 2,
                        scale: 1.01,
                        transition: { duration: 0.4 },
                    }}
                >
                    <div className='bg-slate-900 rounded-lg overflow-hidden shadow-inner'>
                        <div className='bg-slate-800/80 backdrop-blur-md px-4 py-2 flex items-center gap-3 border-b border-slate-700/30'>
                            <div className='flex gap-1.5'>
                                <div className='w-2.5 h-2.5 bg-red-500/50 rounded-full'></div>
                                <div className='w-2.5 h-2.5 bg-yellow-500/50 rounded-full'></div>
                                <div className='w-2.5 h-2.5 bg-green-500/50 rounded-full'></div>
                            </div>
                            <div className='flex-1 bg-slate-900/50 rounded py-0.5 px-3 text-[10px] text-text-muted truncate font-mono'>
                                {title.toLowerCase().replace(/\s+/g, '-')}.io
                            </div>
                        </div>

                        <div className='relative overflow-hidden bg-slate-950'>
                            <motion.img
                                src={image}
                                alt={title}
                                className='block w-full h-auto object-contain'
                            />
                            <div className='absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none'></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={`absolute -bottom-8 hidden lg:block z-30 ${
                        isEven ? '-right-12' : '-left-12'
                    }`}
                    style={{ width: '160px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div
                        className='relative bg-gradient-to-b from-slate-700 to-slate-950 rounded-[2rem] p-1 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.7)] border border-slate-600/60'
                        whileHover={{
                            y: -10,
                            rotateZ: isEven ? 2 : -2,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className='flex h-1 items-center justify-center gap-1'>
                            <div className='h-0.5 w-5 rounded-full bg-slate-500/80'></div>
                            <div className='h-1 w-1 rounded-full bg-slate-500/80'></div>
                        </div>

                        <div className='bg-slate-950 rounded-[1.55rem] overflow-hidden border border-slate-800/60 aspect-[532/1011]'>
                            <motion.img
                                src={mobileImage}
                                alt={`${title} mobile`}
                                className='block w-full h-full object-contain'
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectMockup;

import { motion } from 'framer-motion';

const ProjectMockup = ({ image, mobileImg, title, isEven }) => {
    // Use mobileImg if provided, otherwise use the desktop image
    const mobileImage = mobileImg || image;

    return (
        <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className='flex items-center justify-center lg:justify-start'>
                {/* Desktop Mockup with Mobile Overlay */}
                <motion.div
                    className='relative'
                    style={{ width: '100%', maxWidth: '500px' }}
                    whileHover={{
                        scale: 1.02,
                        rotateY: [0, 2, -2, 0],
                        transition: { duration: 0.6, ease: 'easeInOut' },
                    }}
                >
                    {/* Computer Frame */}
                    <div className='relative bg-gray-800 rounded-lg p-3 shadow-2xl'>
                        {/* Screen */}
                        <div className='bg-white rounded-b-lg overflow-hidden shadow-inner'>
                            {/* Browser Bar */}
                            <div className='bg-gray-700 px-3 py-2 flex items-center space-x-2'>
                                <div className='flex space-x-1'>
                                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                                </div>
                                <div className='flex-1 bg-gray-600 rounded px-2 py-1 text-xs text-white truncate'>
                                    {title}
                                </div>
                            </div>

                            {/* Project Image */}
                            <motion.img
                                src={image}
                                alt={title}
                                className='w-full h-64 object-cover'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Computer Base */}
                        <div className='bg-gray-800 h-1 rounded-b-lg'></div>
                    </div>

                    {/* Stand */}
                    <div className='mx-auto w-16 h-5 bg-gray-700 rounded-b-lg'></div>

                    {/* Mobile Mockup - Hidden on mobile */}
                    <motion.div
                        className={`absolute -bottom-3 hidden lg:block ${
                            isEven ? '-left-7' : '-right-7'
                        }`}
                        style={{ width: '120px' }}
                        whileHover={{
                            scale: 1.05,
                            rotateY: [0, 3, -3, 0],
                            transition: { duration: 0.6, ease: 'easeInOut' },
                        }}
                    >
                        {/* Phone Frame */}
                        <div className='relative bg-gray-800 rounded-3xl p-2 shadow-2xl'>
                            {/* Screen */}
                            <div className='bg-white rounded-2xl overflow-hidden shadow-inner'>
                                {/* Status Bar */}
                                <div className='bg-gray-700 text-white px-2 py-1 flex justify-between items-center text-xs'>
                                    <span>9:41</span>
                                    <div className='flex items-center space-x-1'>
                                        <div className='w-3 h-1.5 border border-white rounded-sm'>
                                            <div className='w-2 h-1 bg-white rounded-sm'></div>
                                        </div>
                                        <div className='w-0.5 h-0.5 bg-white rounded-full'></div>
                                    </div>
                                </div>

                                <motion.img
                                    src={mobileImage ? mobileImage : image}
                                    alt={title}
                                    className='w-full h-40 object-cover'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            <div className='w-3 h-3 bg-gray-600 rounded-full mx-auto mt-1'></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectMockup;

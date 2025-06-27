import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle = ({ text }) => {
    const { ref, inView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            className='flex flex-col w-80 gap-4'
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className='text-4xl font-bold text-text-primary capitalize tracking-wide'
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {text}
            </motion.h2>
            <motion.div
                className='h-1 bg-accent rounded'
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
        </motion.div>
    );
};
export default SectionTitle;

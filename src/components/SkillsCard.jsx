import { motion } from 'framer-motion';
import { hoverLift } from '../hooks/useScrollAnimation';

const SkillsCard = ({ title, icon }) => {
    return (
        <motion.article
            className='bg-slate-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
            {...hoverLift}
        >
            <div className='flex items-center gap-2'>
                <span className='text-accent text-2xl'>{icon}</span>
                <h4 className='text-text-primary font-semibold'>{title}</h4>
            </div>
        </motion.article>
    );
};
export default SkillsCard;

import { motion } from 'framer-motion';
import { hoverLift } from '../hooks/useScrollAnimation';

const SkillsCard = ({ title, icon }) => {
    return (
        <motion.article
            className='group relative bg-slate-800/40 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 shadow-sm hover:border-accent/50 transition-all duration-500 overflow-hidden cursor-default'
            {...hoverLift}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>
            
            <div className='flex items-center gap-3 relative z-10'>
                <div className='p-1.5 rounded bg-slate-900/50 border border-slate-700/50 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500'>
                    <span className='text-accent text-lg block transform group-hover:scale-110 transition-transform duration-500'>{icon}</span>
                </div>
                <h4 className='text-text-secondary font-display font-medium text-xs tracking-wide group-hover:text-white transition-colors duration-500'>{title}</h4>
            </div>

            <div className='absolute -bottom-px -left-px w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-500 ease-out'></div>
        </motion.article>
    );
};
export default SkillsCard;

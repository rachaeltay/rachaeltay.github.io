import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { forwardRef } from 'react';

const AnimatedElement = forwardRef(
    (
        {
            children,
            animation = 'fadeInUp',
            delay = 0,
            className = '',
            as = 'div',
            ...props
        },
        ref
    ) => {
        const { ref: scrollRef, inView } = useScrollAnimation();

        const animations = {
            fadeInUp: {
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay, ease: 'easeOut' },
                },
            },
            fadeInLeft: {
                hidden: { opacity: 0, x: -50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, delay, ease: 'easeOut' },
                },
            },
            fadeInRight: {
                hidden: { opacity: 0, x: 50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, delay, ease: 'easeOut' },
                },
            },
            scaleIn: {
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8, delay, ease: 'easeOut' },
                },
            },
        };

        const MotionComponent = motion[as] || motion.div;
        const elementRef = ref || scrollRef;

        return (
            <MotionComponent
                ref={elementRef}
                variants={animations[animation]}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                className={className}
                {...props}
            >
                {children}
            </MotionComponent>
        );
    }
);

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;

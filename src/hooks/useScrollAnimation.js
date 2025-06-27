import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        triggerOnce = true,
        rootMargin = '0px 0px -50px 0px',
    } = options;

    const [ref, inView] = useInView({
        triggerOnce,
        threshold,
        rootMargin,
    });

    return { ref, inView };
};

// Common animation variants
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

// Project-specific stagger variants
export const projectStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

export const projectStaggerItem = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const contentStaggerVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const itemVariants = {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

// Hover animations
export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300 },
};

export const hoverLift = {
    whileHover: {
        y: -5,
        scale: 1.02,
        boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 300 },
};

export const hoverCard = {
    whileHover: {
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    transition: { type: 'spring', stiffness: 300 },
};

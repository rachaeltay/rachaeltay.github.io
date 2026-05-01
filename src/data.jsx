import { nanoid } from 'nanoid';
import { FaNpm } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import {
    BiLogoFlask,
    BiLogoPython,
    BiLogoDjango,
    BiLogoTailwindCss,
    BiLogoReact,
    BiLogoAngular,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoGit,
    BiLogoJava,
    BiLogoAws,
    BiLogoTypescript,
} from 'react-icons/bi';
import { TbBrandNextjs, TbBrandFigma } from 'react-icons/tb';
import simpleSwap from './assets/images/simpleswap/simpleswap.png';
import chat from './assets/images/chat/chat.png';
import orderbook from './assets/images/orderbook.png';
import studio from './assets/images/studio/studio.png';
import chatMobile from './assets/images/chat/chat-mobile.png';
import studioMobile from './assets/images/studio/studio-mobile.png';
import simpleSwapMobile from './assets/images/simpleswap/simpleswap-mobile.png';

export const links = [
    { id: nanoid(), href: '#intro', text: 'intro' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'HTML',
        category: 'Frontend Architecture',
        icon: <BiLogoHtml5 className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'CSS',
        category: 'Frontend Architecture',
        icon: <BiLogoCss3 className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Javascript',
        category: 'Frontend Architecture',
        icon: <RiJavascriptFill className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Typescript',
        category: 'Frontend Architecture',
        icon: <BiLogoTypescript className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'React',
        category: 'Frontend Architecture',
        icon: <BiLogoReact className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Angular',
        category: 'Frontend Architecture',
        icon: <BiLogoAngular className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'NextJS',
        category: 'Frontend Architecture',
        icon: <TbBrandNextjs className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'TailwindCSS',
        category: 'Frontend Architecture',
        icon: <BiLogoTailwindCss className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Python',
        category: 'Backend & Systems',
        icon: <BiLogoPython className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Flask',
        category: 'Backend & Systems',
        icon: <BiLogoFlask className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Django',
        category: 'Backend & Systems',
        icon: <BiLogoDjango className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Java',
        category: 'Backend & Systems',
        icon: <BiLogoJava className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'AWS',
        category: 'Backend & Systems',
        icon: <BiLogoAws className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Figma',
        category: 'Design & Infrastructure',
        icon: <TbBrandFigma className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'NPM',
        category: 'Design & Infrastructure',
        icon: <FaNpm className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Git',
        category: 'Design & Infrastructure',
        icon: <BiLogoGit className='h-10 w-10 p-1 text-text-primary' />,
    },
];

export const projects = [
    {
        id: nanoid(),
        img: chat,
        mobileImg: chatMobile,
        url: 'https://rach-next-chatbot.vercel.app',
        github: 'https://github.com/rachaeltay/next-chatbot',
        title: 'Groq Model Playground',
        techlist: [
            'Next.js 14',
            'Typescript',
            'TailwindCSS',
            'Shadcn UI',
            'Supabase',
            'Groq AI',
            'Vercel',
        ],
        text: 'A high-concurrency AI chat application for exploring multiple LLMs through Groq API with real-time response streaming and persistent session management.',
        challenge:
            'Optimizing message synchronization and managing complex UI states for multi-turn AI conversations.',
    },
    {
        id: nanoid(),
        img: studio,
        mobileImg: studioMobile,
        url: 'https://diametricstudios.com',
        github: 'https://github.com/rachaeltay/diametricstudio',
        title: 'Diametric Studios',
        techlist: ['React 18', 'TailwindCSS', 'Shadcn UI', 'Cloudflare', 'Git'],
        text: 'A performance-focused landing page for a creative studio with interactive motion elements and premium UI polish.',
        challenge:
            'Balancing complex Framer Motion triggers and Lottie animations to maintain smooth framerates across various devices.',
    },
    {
        id: nanoid(),
        img: simpleSwap,
        mobileImg: simpleSwapMobile,
        url: 'https://simpleswap-rho.vercel.app/',
        github: 'https://github.com/rachaeltay/simpleswap',
        title: 'Simple Swap',
        techlist: ['React 17', 'CoinGecko API', 'Material UI'],
        text: 'A cryptocurrency exchange interface focused on real-time market data retrieval and responsive data visualization.',
        challenge:
            'Efficiently managing API request cycles and building a resilient UI for handling volatile data streams.',
    },
    {
        id: nanoid(),
        img: orderbook,
        url: '',
        github: 'https://github.com/rachaeltay/Angular-Orderbook',
        title: 'Coinbase Live Orderbook',
        techlist: ['Angular 13+', 'Coinbase API', 'Material UI', 'Typescript'],
        text: 'A high-throughput live streaming orderbook with real-time WebSocket integration and optimized data handling.',
        challenge:
            'Managing rapid data updates from WebSocket streams and optimizing Angular change detection for high-frequency price changes.',
    },
];

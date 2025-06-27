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
import simpleSwap from './assets/images/simpleswap-dark-mode.png';
import chatBot from './assets/images/chatbot.png';
import orderbook from './assets/images/orderbook.png';
import diametricStudios from './assets/images/diametric-studios.png';
import chatMobile from './assets/images/chat/chat-mobile.png';
import studioMobile from './assets/images/studio/studio-mobile.png';

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
        icon: <BiLogoHtml5 className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'CSS',
        icon: <BiLogoCss3 className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <RiJavascriptFill className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Typescript',
        icon: <BiLogoTypescript className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <BiLogoReact className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Angular',
        icon: <BiLogoAngular className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'NextJS',
        icon: <TbBrandNextjs className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <BiLogoTailwindCss className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Figma',
        icon: <TbBrandFigma className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'NPM',
        icon: <FaNpm className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Git',
        icon: <BiLogoGit className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <BiLogoPython className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Flask',
        icon: <BiLogoFlask className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Django',
        icon: <BiLogoDjango className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'Java',
        icon: <BiLogoJava className='h-10 w-10 p-1 text-text-primary' />,
    },
    {
        id: nanoid(),
        title: 'AWS',
        icon: <BiLogoAws className='h-10 w-10 p-1 text-text-primary' />,
    },
];

export const projects = [
    {
        id: nanoid(),
        img: chatBot,
        mobileImg: chatMobile,
        url: 'https://rach-next-chatbot.vercel.app',
        github: 'https://github.com/rachaeltay/next-chatbot',
        title: 'Llama 3.3 Chat',
        techlist: [
            'Next.js 14',
            'Typescript',
            'TailwindCSS',
            'Shadcn UI',
            'Supabase',
            'Groq AI',
            'Vercel',
        ],
        text: 'A chat application where users can register, sign in and have multiple conversations with a Llama 3.3 model, built with Next.js 14, Supabase, Llama 3.3, and Vercel',
    },
    {
        id: nanoid(),
        img: diametricStudios,
        mobileImg: studioMobile,
        url: 'https://diametricstudios.com',
        github: 'https://github.com/rachaeltay/diametricstudio',
        title: 'Diametric Studios',
        techlist: ['React 18', 'TailwindCSS', 'Shadcn UI', 'Cloudflare', 'Git'],
        text: 'A modern website for Diametric Studios with a clean and responsive design, built with React 18, TailwindCSS, Shadcn UI, Cloudflare, and Git',
    },
    {
        id: nanoid(),
        img: simpleSwap,
        url: 'https://rach-simpleswap.netlify.app/',
        github: 'https://github.com/rachaeltay/simpleswap',
        title: 'Simple swap',
        techlist: ['React 17', 'CoinGecko API', 'Material UI'],
        text: 'A crypto coin exchange that uses CoinGecko API to retrieve the listing and their prices, built with React 17 with eslint and CoinGecko API',
    },
    {
        id: nanoid(),
        img: orderbook,
        url: '',
        github: 'https://github.com/rachaeltay/Angular-Orderbook',
        title: 'Coinbase Live Orderbook',
        techlist: [
            'Angular 13.1.3',
            'Coinbase API',
            'Material UI',
            'Typescript',
        ],
        text: 'A live orderbook for crypto coins on Coinbase, built with Angular 13.1.3 and Coinbase API',
    },
];

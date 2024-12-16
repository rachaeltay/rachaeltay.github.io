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
import simpleswap from './assets/images/simpleswap-dark-mode.png';
import chatBot from './assets/images/chatbot.png';
import orderbook from './assets/images/orderbook.png';

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'HTML',
        icon: <BiLogoHtml5 className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'CSS',
        icon: <BiLogoCss3 className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <RiJavascriptFill className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Typescript',
        icon: <BiLogoTypescript className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <BiLogoReact className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Angular',
        icon: <BiLogoAngular className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'NextJS',
        icon: <TbBrandNextjs className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <BiLogoTailwindCss className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Figma',
        icon: <TbBrandFigma className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'NPM',
        icon: <FaNpm className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Git',
        icon: <BiLogoGit className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <BiLogoPython className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Flask',
        icon: <BiLogoFlask className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Django',
        icon: <BiLogoDjango className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'Java',
        icon: <BiLogoJava className='h-10 w-10 p-1 text-slate-200' />,
    },
    {
        id: nanoid(),
        title: 'AWS',
        icon: <BiLogoAws className='h-10 w-10 p-1 text-slate-200' />,
    },
];

export const projects = [
    {
        id: nanoid(),
        img: chatBot,
        url: 'https://rach-next-chatbot.vercel.app',
        github: 'https://github.com/rachaeltay/next-chatbot',
        title: 'Llama 3.3 Chatbot',
        tech: 'Using Next.js 14, Supabase, Llama 3.3, and Vercel',
        text: 'A chat application where users register, sign in and can have multiple conversations with a Llama 3.3 model',
    },
    {
        id: nanoid(),
        img: simpleswap,
        url: 'https://rach-simpleswap.netlify.app/',
        github: 'https://github.com/rachaeltay/simpleswap',
        title: 'Simple swap',
        tech: 'Using React 17 with eslint and CoinGecko API',
        text: 'A crypto coin exchange that uses CoinGecko API to retrieve the listing and their prices',
    },
    {
        id: nanoid(),
        img: orderbook,
        url: '',
        github: 'https://github.com/rachaeltay/Angular-Orderbook',
        title: 'Coinbase Live Orderbook',
        tech: 'Using Angular and Coinbase API',
        text: 'An orderbook for crypto coins',
    },
];

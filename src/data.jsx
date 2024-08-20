import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaAngular,
  FaCss3,
  FaPython,
  FaGithub,
  FaJava,
  FaNpm,
  FaAws,
  FaFlask,
  FaFigma,
} from 'react-icons/fa';
import simpleswap from './assets/images/simpleswap-dark-mode.png';
import colorGenerator from './assets/images/color-generator.png';
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
    icon: <FaHtml5 className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'CSS',
    icon: <FaCss3 className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Angular',
    icon: <FaAngular className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <FaFigma className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'NPM',
    icon: <FaNpm className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGithub className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Flask',
    icon: <FaFlask className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-10 w-10 p-1 text-slate-200' />,
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <FaAws className='h-10 w-10 p-1 text-slate-200' />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: simpleswap,
    url: 'https://rach-simpleswap.netlify.app/',
    github: 'https://github.com/rachaeltay/simpleswap',
    title: 'Simple swap',
    tech: 'Using React 17 with eslint and CoinGecko API',
    text: 'A crypto coin exchange that uses CoinGecko API to retrieve the listing and their prices.',
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
  {
    id: nanoid(),
    img: colorGenerator,
    url: 'https://rach-color-generator.netlify.app/',
    github: 'https://github.com/rachaeltay/color-generator',
    title: 'Color generator',
    tech: 'Using React 18 and values.js',
    text: 'I like colors. What can I say?',
  },
];

import SectionTitle from './SectionTitle';
import profilePic from '../assets/images/catprofile.png';

const About = () => {
    return (
        <section
            className='bg-gradient-to-b from-slate-500 to-slate-400 py-20'
            id='about'
        >
            <div className='align-element grid md:grid-cols-2 items-center gap-6 px-10'>
                <img className='rounded-full py-16 px-16' src={profilePic} />
                <article>
                    <SectionTitle text='code and me' />
                    <p className='text-text-dark mt-8 leading-loose'>
                        Hello, I'm Rachael Tay, a dedicated software engineer
                        focused on creating seamless user experiences and
                        leveraging cutting-edge technologies. I'm driven by a
                        genuine passion for continuous learning and exploring
                        new technologies. As a lifelong learner, I embrace
                        opportunities to expand my skills. Beyond building
                        applications, I also find joy in crafting custom
                        mechanical keyboards!
                    </p>
                </article>
            </div>
        </section>
    );
};
export default About;

const SkillsCard = ({ icon, title }) => {
    return (
        <article>
            <span className='inline-flex items-center justify-center p-2 bg-secondary duration-300 rounded-full shadow-lg hover:bg-primary'>
                <span>{icon}</span>
                <p className='text-text-primary px-2'>{title}</p>
            </span>
        </article>
    );
};
export default SkillsCard;

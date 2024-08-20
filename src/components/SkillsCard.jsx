const SkillsCard = ({ icon, title }) => {
  return (
    <article>
      <span class='inline-flex items-center justify-center p-2 bg-sky-600 rounded-full shadow-lg'>
        <span>{icon}</span>
        <p className='text-white px-2'>{title}</p>
      </span>
    </article>
  );
};
export default SkillsCard;

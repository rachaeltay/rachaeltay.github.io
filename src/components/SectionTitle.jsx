const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-border-light pb-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize text-text-primary'>
                {text}
            </h2>
        </div>
    );
};
export default SectionTitle;

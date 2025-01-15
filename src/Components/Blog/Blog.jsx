import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog , handelAddToBookmark}) => {
    const { title, cover, author_img, posted_date, author, reading_time, hashtags } = blog;
    return (
        <div className='mb-14'>
            <img className='w-full rounded-md mt-4 mb-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'> {author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={handelAddToBookmark}
                    className='ml-2 text-sky-400 text-2xl '>
                        <FaBookmark></FaBookmark></button>
                    
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-5">{title}</h2>
            <p>
                {
                   hashtags.map((hash, idx)=> <span key={idx}><a href=""># {hash}</a></span>)         
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};
export default Blog;
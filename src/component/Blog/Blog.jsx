import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark,handleAddToTime}) => {
const {Title,Cover,Reading_time,Author_img,Author,Posted_date,Hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='rounded-xl' src={Cover} alt={`Cover picture of the title ${Title}`} />
            <div className='flex justify-between mb-8'>
                <div className='flex gap-4 mt-5'>
                    <div><img className='h-16 rounded-full' src={Author_img} alt="" /></div>
                    <div>
                        <h2 className='text-2xl font-bold'>{Author}</h2>
                        <h2 className='text-[#11111199] font-bold'>{Posted_date}</h2>
                    </div>
                </div>
             
                    <span  className='text-2xl text-[#11111199] mt-5'>{Reading_time} min read<button onClick={()=> handleAddToBookmark(blog)} className='ml-8'><FaBookmark></FaBookmark></button></span>   
            </div>
        <h2 className='text-4xl'>{Title}</h2>
        <p className='mt-8'>
            {
                Hashtags.map((hash,idx)=><span className='ml-4 text-2xl text-[#11111199] ' key={idx}><a href="">#{hash}</a></span>)
            }
        </p>
        <button onClick={()=>handleAddToTime(Reading_time)} className='pt-8 text-blue-600 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}
export default Blog;
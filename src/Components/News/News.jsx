import PropTypes from 'prop-types';
import { CiShare2 } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";

import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const News = ({ aNews }) => {
  const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = aNews;
  
  const { name, published_date, img } = author;

  const date = (published_date + " ").slice(0, 10);
  

  return (
    <div>
      <div className="news pb-16 mb-7  border-[2px] b border-[#F3F3F3] relative">
        <div className="news-profile flex justify-between items-center  min-h-20 p-5 bg-[#F3F3F3]">
          <div className="flex items-center gap-4">
            <img className='w-10 h-10  rounded-full ' src={img} alt="Author" />
            <div className="text">
              <h3 className='text-base font-medium text-[#403F3F]'>{name}</h3>
              <h2 className='text-sm font-light text-[#706F6F]'>{date}</h2>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <CiShare2 />
            <HiOutlineBookmark />
          </div>
        </div>
        <div className='min-h-52 p-5 '>
          <h2 className='text-xl mb-5  object-cover font-semibold leading-9 text-[#403F3F]'>{title}</h2>
          <img className='object-cover border-[1px] border-black min-w-full max-h-[20vw]' src={image_url} alt="News Thumbnail" />
          <div className='mt-5'>{details.length > 200 ? <div className='text-[#706F6F] leading-6 font-normal text-base'>{details.slice(0, 200)}
           ...
            {<Link to={`/news/${_id}`} className=' text-orange-600'><p>read more</p></Link>}
           </div> : details}</div>
        </div>
        <div className="newsFooter flex justify-between items-center border-t-[1px] border-[#E7E7E7] border-solid min-h-16  absolute right-5 left-5 bottom-0">


          <div className='flex gap-3 items-center justify-center'>
            <div className="rating">
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            </div>
            <p>{rating.number}</p>
          </div>


          <div className='flex justify-between gap-3  items-center'>
          <FaEye />
          <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  aNews: PropTypes.object
};

export default News;

import PropTypes from 'prop-types';
import { CiShare2 } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


const News = ({ aNews }) => {
  const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = aNews;
  
  const { name, published_date, img } = author;

  const date = (published_date + " ").slice(0, 10);
  const x = {
    "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": { "number": 4.5, "badge": "Excellent" },
    "total_view": 488,
    "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    "author": {
      "name": "Jimmy Dane",
      "published_date": "2022-08-24 17:27:34",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
  };

  return (
    <div>
      <div className="news pb-16 mb-7  border-[2px] b border-[#F3F3F3] relative">
        <div className="news-profile flex justify-between items-center  min-h-20 p-5 bg-[#F3F3F3]">
          <div className="flex items-center gap-4">
            <img className='w-5 h-5' src={img} alt="Author" />
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
          <div className='mt-5'>{details.length > 200 ? <div className='text-[#706F6F] leading-6 font-normal text-base'>{details.slice(0, 200)} ... {<Link to="/" className=' text-orange-600'>read more</Link>}</div> : details}</div>
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

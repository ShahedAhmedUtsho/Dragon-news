import { useParams,useLoaderData} from "react-router-dom";
import RightBar from "../RightBar/RightBar";
import Top from "../Top/Top";
import { FaArrowLeft } from "react-icons/fa6";
const NewsDetails = () => {

  const news = useLoaderData()
  // params.NewsId

const {NewsId} = useParams()

const x = news.find(aNews => aNews._id === NewsId )




// const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = x;
   
      const { title,  image_url, details } = x;
    return (
        <div className='max-w-[1240px] mx-auto' >
           <Top></Top>
           
           <div className=" min-h-96 grid grid-cols-12 gap-5">
            
            <div className=" col-span-9">
            <h3 className=" text-xl font-medium mb-5">Dragon News</h3>
            <div className="border-[1px] border-[#E7E7E7] p-7">
                <img className="h-[410px] object-cover w-full rounded-sm mb-5" src={image_url} alt="" />

                <h2 className='text-xl mb-5  object-cover font-semibold leading-9 text-[#403F3F]'>{title}</h2>
                <p className="text-[#706F6F] leading-7 font-light mb-7 text-base">
                    {details}
                </p>
               <div className=" bg-[#D72050] w-2/5 rounded-sm mb-3 text-white text-xl font-normal py-2 flex justify-center items-center flex  justify-center gap-3 items-center">
<FaArrowLeft />
                <p>All news in this category</p>

               </div>




            </div>











            </div>


            <div className="  col-span-3 ">
                <RightBar></RightBar>

            </div>

           </div>
           

           
        </div>
    );
};

export default NewsDetails;
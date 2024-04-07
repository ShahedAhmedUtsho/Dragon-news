import { useLoaderData } from "react-router-dom";
import News from "../News/News";
const Midbar = () => {
    const news = useLoaderData()
    return (
        <div className="  h-full">
             <h3 className=" text-xl font-medium mb-5">Dragon News Home</h3>
             
             {
                news.map((aNews,index)=> <News aNews={aNews} key={index}></News>)
             }
             
           
          
            
        </div>
    );
};

export default Midbar;
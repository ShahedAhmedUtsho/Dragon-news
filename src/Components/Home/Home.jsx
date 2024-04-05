import Header from "../Header/Header";
import Marquee from "react-fast-marquee";
import Top from "../Top/Top";
import Leftbar from "../LeftBar/Leftbar";
import Midbar from "../Midbar/Midbar";
import RightBar from "../RightBar/RightBar";


const Home = () => {

    return (
        <div>
            <Top></Top>
            <div className="my-5 gap-1 p-4 bg-[#F3F3F3] flex items-center">
                <a className="btnM">Latest</a>
                <Marquee speed={150}>
                    <p className="w-full font-semibold text-[#403F3F] text-lg">
                        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                    </p>
                </Marquee>
            </div>
            <Header></Header>

            <div className="body grid gap-5   grid-cols-12    min-h-96 mt-10">

<div className="col-span-3">
<Leftbar ></Leftbar>
</div>
<div  className="col-span-6">
<Midbar ></Midbar>
</div>
<div  className="col-span-3">
<RightBar></RightBar>
</div>


           
           
           
            </div>
            
        </div>
    );
};

export default Home;

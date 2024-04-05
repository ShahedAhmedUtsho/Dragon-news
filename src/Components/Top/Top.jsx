
import logo from '../../assets/logo.png'
import moment from "moment";


const Top = () => {
    return (
        <div className='mt-8'>

            
<img className="max-w-[470px] mx-auto" src={logo} alt="" />
            <p className="text-lg text-[#706F6F] text-center  font-light mt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#706F6F] text-center  mt-3 ">{moment().format('dddd MMMM d , yyyy')}</p>
            
        </div>
    );
};

export default Top;
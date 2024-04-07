
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {

    const {login} =useContext(AuthContext)
    const handleLogIn = e => {
        e.preventDefault(); 
       
        const email = e.target.email.value ;
        const password = e.target.password.value;
        login(email,password)
        e.target.reset();
    }



    return (
        <div className="bg-[#F3F3F3] min-h-screen">
            <br />
            <div className="max-w-[1240px] mx-auto">
            <Header></Header>
            </div>
            
            <div className="max-w-[700px] mx-auto border-2 py-[70px] px-20  bg-white mt-12">
            <p className="font-medium text-center text-4xl text-[#403F3F] mb-10">Login your account</p>
            <form onSubmit={handleLogIn} className=" border-t-[1px] border-[#E7E7E7] pt-8">
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4">Email address</p>
                <input name="email" type="email" placeholder="Enter your email address" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " />
                </div>
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4">Email address</p>
                <input name="password" type="password" placeholder="Enter your email address" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " />
                </div>
               <button  type="submit" className=" bg-[#403F3F] w-full rounded-lg mb-3 text-white text-xl font-medium py-4 flex justify-center items-center">Login</button>
                <p className="text-center text-base font-medium text-[#706F6F]"> Don&apos;t Have An Account ? <Link to="/register" className="text-[#ff8c45]">Register</Link></p> 

            </form>


            </div>
            
        </div>
    );
};

export default Login;
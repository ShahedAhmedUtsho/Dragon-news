

import { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
const {register} =useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault(); 
       
        const fullName = e.target.name.value ;
        const email = e.target.email.value ;
        const photoURL = e.target.photoURL.value ;
        const password = e.target.password.value;


        // console.log(fullName,photoURL,password,email)


        register(email,password,fullName,photoURL)
        
        


        e.target.reset();
    }


    return (
        <div>
            <div className="bg-[#F3F3F3] min-h-screen capitalize">
            <br />
            <div className="max-w-[1240px] mx-auto">
            <Header></Header>
            </div>
            
            <div onSubmit={handleRegister} className="max-w-[700px] mx-auto border-2 py-[70px] px-20  bg-white mt-12  ">
            <p className="font-medium text-center text-4xl text-[#403F3F] mb-10">Register your account</p>
            <form className=" border-t-[1px] border-[#E7E7E7] pt-8">
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4" > your name</p>
                <input name = "name" type="text" placeholder="Enter your name" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " required />
                </div>
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4">Photo URL</p>
                <input name ="photoURL" type="text" placeholder="Enter your Photo URL" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " />
                </div>
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4">Email address</p>
                <input name = "email" type="email" placeholder="Enter your email address" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " required />
                </div>
                <div className="mb-7">
                    <p className="font-medium  text-xl text-[#403F3F] mb-4">Password</p>
                <input name = "password" type="password" placeholder="Enter your Password" className="input  focus:outline-1 focus:outline-black focus:border-[#ddd0] rounded-lg  w-full min-h-16 bg-[#F3F3F3] " required />
                </div>
               <button type="submit" className=" bg-[#403F3F] w-full rounded-lg mb-3 text-white text-xl font-medium py-4 flex justify-center items-center"> register</button>
             

            </form>
            


            </div>
            
        </div>
            
        </div>
    );
};

export default Register;
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const RightBar = () => {
    const {GoogleRegister,githubLogin} = useContext(AuthContext)
  



    return (
        <div className=" h-full">
            <div className="loginWith  mb-10">
                <h3 className=" text-xl font-medium mb-5">Login with</h3>
                <div className="logInWithButtons">
                    <div className="withGoogle withBtn text-[#4285f4]" onClick={GoogleRegister}>
                    <FaGoogle />
                    <p>login with Google</p>
                    </div>

                    <div onClick={githubLogin} className="withGithub withBtn text-black">
                    <FaGithub />
                    <p>login with Github</p>
                    </div>
                </div>
            </div>
            <div className="findUs mb-5">
                <h3 className=" text-xl font-medium mb-5">Login with</h3>
                <div className="findUsOn min-h-20 rounded-lg border-[1px] border-solid text-base border-[#E7E7E7]">
                    <div className="socialBtn">
                        < FaFacebookF className="rounded-full bg-[#e7e7e74a] text-xl p-2 w-7 h-7 text-[#0765FF]" />
                        <p> Facebook</p>

                    </div>
                    <div className="socialBtn border-y-[1px] border-solid  border-[#E7E7E7]">
                        < FaTwitter className="rounded-full bg-[#e7e7e74a] text-xl p-2 w-7 h-7 text-[#1DA1F2]" />
                        <p> Twitter</p>

                    </div>
                   
                    <div className="socialBtn">
                        < FaInstagram className="rounded-full bg-[#e7e7e74a] text-xl p-2 w-7 h-7 text-[#fd1d1d]" />
                        <p> Instagram</p>

                    </div>
                   
                   
                </div>
            </div>


             
          
        </div>
    );
};

export default RightBar;
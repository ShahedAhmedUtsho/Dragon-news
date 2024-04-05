import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const RightBar = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className="bg-green-400 h-full">
          {user}
        </div>
    );
};

export default RightBar;
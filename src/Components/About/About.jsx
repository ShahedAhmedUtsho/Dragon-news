import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const About = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            {user}
        </div>
    );
};

export default About;
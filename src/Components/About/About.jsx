import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user.email}
        </div>
    );
};

export default About;
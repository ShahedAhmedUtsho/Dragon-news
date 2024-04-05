
const Leftbar = () => {
    return (
        <div className=" h-full caterogy ">
            <h3 className=" text-xl font-medium mb-5"> All Caterogy</h3>
            <ul className="  capitalize  list-none *:pl-12 *:py-5 flex flex-col text-[#9F9F9F] gap-2">
                <li className="text-xl text-normal active ">Breaking news</li>
                <li className="text-xl text-normal "> regular news</li>
                <li className="text-xl text-normal "> international news</li>
                <li className="text-xl text-normal "> sports</li>
                <li className="text-xl text-normal "> Entertainment</li>
                <li className="text-xl text-normal "> culture</li>
                <li className="text-xl text-normal "> arts</li>
                <li className="text-xl text-normal "> all news</li>
            </ul>
            
        </div>
    );
};

export default Leftbar;
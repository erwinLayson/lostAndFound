import { useState } from "react"
import { NavLink } from "react-router-dom"

// Icons 
import menuIcon from "../../assets/OIP.webp"

export function Navigation() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu((prev) => !prev);
    }

    return (
        <>
            <div className=" hidden md:flex gap-5 text-sm md:text-[16px] md:mr-[40px] items-center justify-center text-gray-300">
                <li className="list-none hover:text-white"><NavLink to="/">Home</NavLink></li>
                <li className="list-none hover:text-white"><NavLink to="/report_found">Report Found</NavLink></li>
                <li className="list-none hover:text-white"><NavLink to="/report_lost">Report Lost</NavLink></li>
                <li className="list-none hover:text-white"><NavLink to="/admin">Admin</NavLink></li>
                
            </div>

            <div className="flex relative md:hidden mr-[20px]">
                <img src={menuIcon} alt="icon" className="w-[30px] h-[30px] mask-gradient" onClick={handleClick} />
                
                <div className={`absolute ${menu ? "flex" : "hidden"} flex-col gap-2 text-gray-300 items-center justify-center bg-blue-900 w-[200px] right-[0px] top-[60px] shadow-lg rounded-lg p-3`}>
                    <li className="list-none hover:text-white"><NavLink to="/">Home</NavLink></li>
                    <li className="list-none hover:text-white"><NavLink to="/report_found">Report Found</NavLink></li>
                    <li className="list-none hover:text-white"><NavLink to="/report_lost">Report Lost</NavLink></li>
                    <li className="list-none hover:text-white"><NavLink to="/admin">Admin</NavLink></li>
                    </div>
            </div>
        </>
    )
}
import { useState } from "react"

import menuIcon from "../../../assets/menuIcon.png"


export function Navigation() {
    const [openSidebar, setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar((prev) => !prev);
    }

    return (
        <>
            <ul className="hidden sm:flex gap-3 items-center">
                <button className="bg-orange-400 hover:bg-orange-500 p-2 cursor-pointer text-white rounded-lg">Settings</button>
                <button className="bg-red-800 hover:bg-red-900 cursor-pointer text-white rounded-lg p-2">Logout</button>
            </ul>
            <div className="block sm:hidden">
                <img onClick={handleClick} src={menuIcon} alt="Icon"  className="w-[40px] h-[40px] rounded-lg cursor-pointer"/>
            </div>

            <div className={`bg-blue-900 w-auto shadow-lg sm:w-[200px] absolute ${openSidebar ? "flex" : "hidden"} sm:hidden flex-col items-center justify-center gap-3 p-3 rounded-lg right-[20px] text-white top-[80px]`}>
                <span className="hover:text-white text-gray-300 cursor-pointer">Settings</span>
                <span className="hover:text-white text-gray-300 cursor-pointer">Logout</span>
            </div>
        </>
    )
}
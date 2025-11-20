import logo from "../assets/sksu.png"
import { Navigation } from "./utility/Navigation.jsx";

export function Navbar() {

  return (
    <>
      <header className="bg-blue-900 p-3 flex items-center justify-between w-screen fixed top-0 left-0 shadow-lg z-10">
        <div className="flex gap-2"> 
          <img src={logo} alt="logo" className="mx-4 w-[50px] h-[50px] rounded-full" />

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white hidden sm:block md:text-xl font-bold">SKSU Lost & Found Platform</h1>
            <p className="text-gray-300 arial text-sm md:text-md">Sultan Kudarat State University</p>
          </div>
        </div>
        <Navigation />
      </header>
    </>
  )
}


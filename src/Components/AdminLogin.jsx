import { Navbar } from "./Navbar"

export function AdminLoginPage() {
    return (
        <>
            <Navbar />
            <div className="bg-blue-900 w-full h-screen flex relative justify-center items-center">
                <form action="" className="bg-white shadow-lg px-10 py-7 rounded-lg w-full max-w-[80%] sm:max-w-[35%] flex flex-col gap-8">
                    <div className="text-center w-full flex flex-col gap-3">
                        <h1 className="w-full text-center text-xl font-bold">Admin Login</h1>
                        <p className="text-gray-500 text-xl">SKSU Lost & Found Platform</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Username</label>
                            <input type="text" name="" id="" className="p-2 px-5 w-full border-1 border-gray-300 rounded-lg" placeholder="Admin username"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="p-2 px-5 w-full border-1 border-gray-300 rounded-lg" placeholder="Admin password"/>
                        </div>

                        <button className="w-full text-white font-bold text-lx bg-blue-800 p-3 rounded-lg hover:bg-blue-900 cursor-pointer">Sign In</button>
                    </div>
                </form>
            </div>        
        </>
    )
}

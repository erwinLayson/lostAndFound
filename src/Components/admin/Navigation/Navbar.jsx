import logo from "../../../assets/sksu.png"
import { Navigation } from "./AdminNavbar"

export function Navbar() {
    return (
        <>
            <header className="fixed left-0 flex items-center justify-between top-0 w-screen px-5 py-3 bg-blue-900">
                <div className="flex items-center justify-center gap-4">
                    <img src={ logo } alt="AdminLogo" className="rounded-full w-[50px] h-[50px] " />

                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                        <p className="text-md text-white">SKSU Lost & Found Platform</p>
                    </div>
                </div>
                <Navigation />
            </header>
        </>
    )
}
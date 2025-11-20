// Components 
import { Navbar } from "./Navbar"
import { Search } from "./Search"
import { ReportLinks } from "./ReportLink"


export function Index() {
    return (
        <>
            <div className="p-5 pt-[100px] w-full flex flex-col items-center justify-center">
                <Navbar />
                <Search />
                <ReportLinks />
            </div>
        </>
    )
}
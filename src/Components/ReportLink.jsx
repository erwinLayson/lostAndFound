import {useNavigate} from "react-router-dom"

// data
import {  foundItemData } from "../assets/data/ItemData";
export function ReportLinks() {
    const navigate = useNavigate();
    const foundItem = foundItemData();

    return (
        <>
        <div className="md:grid flex flex-col md:grid-cols-2 gap-6 w-full relative">

            <div className="text-center w-full shadow-lg p-3 rounded-lg flex flex-col gap-4 items-center justidy-center hover:shadow-xl transition-shadow">
            <p className="text-2xl text-black font-semibold">Found Something?</p>
            <p className="text-gray-400">Help someone get their item back by reporting what you found</p>
                    <button className="px-4 py-2 text-white max-w-[250px] bg-green-600 rounded-lg hover:bg-green-700" onClick={(() => {
                        setTimeout(() => {navigate('/report_found')}, 1000)
            })}>Report found item</button>
            </div>

            <div className="text-center w-full shadow-lg p-3 rounded-lg flex flex-col gap-4 items-center justify-center hover:shadow-xl transition-shadow">
            <p className="font-semibold text-2xl">Lost Something?</p>
            <p className="text-gray-400">Report your lost item and we'll help you find it.</p>

                    <button className="px-4 py-2 text-white max-w-[250px] bg-blue-500 rounded-lg hover:bg-blue-600" onClick={() => {
                        setTimeout(() => {
                            navigate('/report_lost')
                        }, 1000)
            }}>Report lost item</button>
            </div>
            </div>
            
            <div id="report-found-section" className="w-full relative p-5 shadow-lg rounded-lg flex flex-col gap-3">
                <p className="text-xl font-semibold">Report Found Item</p>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
                    {/* section 1 */}
                    {foundItem.map(item => (
                        <div className="bg-gray-100 p-2 rounded-lg flex flex-col gap-3 items-start justify-center shadow-lg">
                            <p className="text-md font-bold flex w-full justify-between">{item.itemTitle} <span className="text-[12px] font-semibold text-gray-500 bg-yellow-300/50 rounded-lg p-1">{ item.status ? "claimed" : "Unclaimed"}</span></p>

                            <p className="text-gray-700 text-sm">{ item.description}</p>
                            <p className="text-gray-700 text-sm flex w-full justify-between">{item.location} <span>{ item.dateFound}</span></p>

                            <p className="text-sm text-gray-700 flex w-full justify-between">{ item.category} <span className="text-blue-500 text-[11px] font-bold cursor-pointer">View Details</span></p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
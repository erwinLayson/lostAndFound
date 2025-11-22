export function DashboardCard() {
    return (
        <>
            <div className="flex flex-col sm:grid sm:grid-cols-4 gap-5">

                <div className=" flex flex-col justify-center p-4 h-[100px] shadow-lg rounded-lg">
                    <span className="text-blue-500 font-bold text-4xl">4</span>
                    <p className="text-gray-500">Total items</p>
                </div>
                <div className=" flex flex-col justify-center p-4 h-[100px] shadow-lg rounded-lg">
                    <span className="text-blue-500 font-bold text-4xl">4</span>
                    <p className="text-gray-500">Found items</p>
                </div>
                <div className=" flex flex-col justify-center p-4 h-[100px] shadow-lg rounded-lg">
                    <span className="text-blue-500 font-bold text-4xl">4</span>
                    <p className="text-gray-500">Lost reports</p>
                </div>
                <div className=" flex flex-col justify-center p-4 h-[100px] shadow-lg rounded-lg">
                    <span className="text-blue-500 font-bold text-4xl">4</span>
                    <p className="text-gray-500">Claimed Items</p>
                </div>
            </div>
        </>
    )
}
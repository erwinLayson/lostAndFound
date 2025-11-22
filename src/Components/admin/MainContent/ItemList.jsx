export function ItemList() {
    return (
        <>
            <main className="w-full flex flex-col shadow-lg rounded-lg p-3">
                <h1 className="p-3 text-2xl w-full shadow-sm">All Items</h1>

                <div className="flex flex-col">

                    <section className="flex justify-between items-center p-2 shadow-sm">
                        <div className="flex flex-col  gap-3">
                            <div className="flex gap-5">
                                <p className="text-xl font-semibold">Bags</p>
                                <span className="bg-green-200/50 py-1 px-2 text-[10px] rounded-lg">type</span>
                                <span className="bg-yellow-200/50 py-1 px-2 text-[10px] rounded-lg">Status</span>
                            </div>

                            <div className="flex flex-col gap-4 text-gray-600">
                                <p className="text-[10px] ">Location: <span>Canteen</span></p>
                                <p className="text-[10px] ">Category: <span>Bags</span></p>
                                <p className="text-[10px] ">Contact: <span>005456465465</span></p>
                            </div>

                        </div>
                        <div className="text-gray-600 flex flex-col justify-center gap-3">
                            <p className="text-[10px] ">Date: <span>11/20/2025</span></p>
                            <p className="text-[10px]">Reporter: <span>11/20/2025</span></p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <button className="w-auto sm:w-[150px] rounded-lg py-1 px-3 text-[10px] bg-blue-400 hover:bg-blue-500">View Details</button>
                            <button className="w-auto sm:w-[150px] rounded-lg py-1 px-3 text-[10px] bg-orange-400 hover:bg-orange-500">Mark Claimed</button>
                            <button className="w-auto sm:w-[150px] rounded-lg py-1 px-3 text-[10px] bg-red-600 hover:bg-red-700">Delete</button>
                        </div>
                    </section>

                    <section className="flex justify-between items-center p-2 shadow-sm">
                        <div className="flex flex-col  gap-3">
                            <div className="flex gap-5">
                                <p className="text-xl font-semibold">Bags</p>
                                <span className="bg-green-200/50 py-1 px-2 text-[10px] rounded-lg">type</span>
                                <span className="bg-yellow-200/50 py-1 px-2 text-[10px] rounded-lg">Status</span>
                            </div>

                            <div className="flex flex-col gap-4 text-gray-600">
                                <p className="text-[10px]">Location: <span>Canteen</span></p>
                                <p className="text-[10px]">Category: <span>Bags</span></p>
                                <p className="text-[10px]">Contact: <span>005456465465</span></p>
                            </div>

                        </div>
                        <div className="text-gray-600 flex flex-col justify-center gap-3">
                            <p className="text-[10px]">Date: <span>11/20/2025</span></p>
                            <p className="text-[10px]">Reporter: <span>11/20/2025</span></p>
                        </div>

                        <div className="flex flex-col gap-2 w-[20%] sm:w-auto">
                            <button className="w-auto sm:w-[150px] rounded-lg p-1 text-[10px] bg-blue-400 hover:bg-blue-500">View Details</button>
                            <button className="w-auto sm:w-[150px] rounded-lg p-1 text-[10px] bg-orange-400 hover:bg-orange-500">Mark Claimed</button>
                            <button className="w-auto sm:w-[150px] rounded-lg p-1 text-[10px] bg-red-600 hover:bg-red-700">Delete</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
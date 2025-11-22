export function AdminFilter() {
    return (
        <>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-3 rounded-lg shadow-lg">
            <select name="" id="" className="p-2 border-1 border-gray-200 rounded-lg w-full">
                <option value="" selected disabled>All Types</option>
            </select>
            <select name="" id="" className="p-2 border-1 border-gray-200 rounded-lg w-full">
                <option value="" selected disabled>All Status</option>
            </select>
            <select name="" id="" className="p-2 border-1 border-gray-200 rounded-lg w-full">
                <option value="" selected disabled>All Categories</option>
            </select>

            <button className="w-full p-2 text-white rounded-lg bg-blue-600 hover:bg-blue-700">Apply filters</button>
        </div>
        </>
    )
}
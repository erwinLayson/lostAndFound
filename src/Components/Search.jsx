export function Search() {

  return (
    <>
      <div className="w-full md:max-w-[90%] lg:max-w-[65%] gap-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Find Your Lost Items</h1>

          <p className="text-md text-gray-600 text-center sm:max-w-[85%]">
          Search through found items or report what you've lost or found. Our platform helps connect items with their rightful owners.
        </p>
        
        <div className="flex flex-col gap-6 bg-white w-full p-5 shadow-lg rounded-lg">
          <input type="text" name="search" id="search" className="w-full h-auto text-md border-1 rounded-md border-gray-400 px-10 py-3 focus:outline-blue-900/60" placeholder="Search" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <select name="" id="" className="border-1 border-gray-400 rounded-md p-2 w-[100%]">
              <option value="all">All categories</option>
            </select>
            <select name="" id="" className="border-1 border-gray-400 rounded-md p-2 w-[100%]">
              <option value="">All Locations</option>
            </select>
            <select name="" id="" className="border-1 border-gray-400 rounded-md p-2 w-[100%]">
                <option value="">All Stutus</option>
            </select>
            <button name="" id="" className="border-1 border-gray-400 rounded-md p-2 w-[100%]">
                Clear all filter
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


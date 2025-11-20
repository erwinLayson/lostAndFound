import { useState } from "react"

import { Navbar } from "./Navbar"

// data 
import { foundItemData } from "../assets/data/ItemData"

const foundDataArr = foundItemData();

export function ReportFound() {
    const [foundData, setFoundItem] = useState({
        itemTitle: "",
        description: "",
        category: "",
        location: "",
        reporterName: "",
        reporterContact: "",
        dateFound: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        status: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFoundItem((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFoundSubmit = (e) => {
        e.preventDefault();

        const isAllFill = Object.keys(foundData).every(key => (
            foundData[key] !== ""
        ));

        if (!isAllFill) {
            alert("Fill up all field")
            return;
        }

        foundDataArr.push(foundData)
        localStorage.setItem("foundItemData", JSON.stringify(foundDataArr));

        e.target.reset();
    } 

    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-2 w-[90%] md:max-w-[60%] pt-[100px]">
                <h1 className="text-3xl font-bold">Report Found Item</h1>
                <form onSubmit={handleFoundSubmit} className="shadow lg p-3 text-gray-500 flex flex-col rounded-md gap-3">

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="">Item Title</label>
                        <input type="text" name="itemTitle" id="itemTitle" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="e.g Iphone 12, Black bag" onChange={handleChange}/>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="rounded-md p-2 px-4 border-1 border-gray-500"  onChange={handleChange}>
                            <option value="" selected disabled> Select Category</option>
                            <option value="bags"> Bags</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" className="border-1 border-gray-500 rounded-md h-[150px] p-4 " placeholder="Describe the Item details"  onChange={handleChange}>

                        </textarea>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="location">Location Found</label>
                        <select name="location" id="location" className="rounded-md p-2 px-4 border-1 border-gray-500"  onChange={handleChange}>
                            <option value="" selected disabled> Select Location</option>
                            <option value="canteen" > Canteen</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="reporterName">Your name</label>
                        <input type="text" name="reporterName" id="reporterName" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="Enter your full name"  onChange={handleChange}/>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="reporterContact">Your contact</label>
                        <input type="text" name="reporterContact" id="reporterContact" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="e.g john@gmail.com or 025545872"  onChange={handleChange}/>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                       <button className="text-center w-full px-4 py-3 bg-green-700 border-0 shadow-lg rounded-lg text-white hover:bg-green-800">Submit Found Item</button>
                    </div>
                </form>
            </main>
        </>
    )
}
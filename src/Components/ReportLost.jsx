import { useState } from "react";
// Components
import { Navbar } from "./Navbar"

// data
import { lostItemData } from "../assets/data/ItemData";

const lostItemDataArr = lostItemData(); 

export function ReportLost() {
    const [lostData, setLostData] = useState({
        itemTitle: "",
        category: "",
        description: "",
        location: "",
        reporterName: "",
        reporterContact: ""
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setLostData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleLostSubmit = (e) => {
            e.preventDefault();

        const isAllFill = Object.keys(lostData).every(key => (
            lostData[key] !== ""
        ));

        if (!isAllFill) {
            alert("Fill up all field")
            return;
        }

        lostItemDataArr.push(lostData);
        localStorage.setItem("lostItemData", JSON.stringify(lostItemDataArr));

        e.target.reset();
    } 

    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-2 w-[90%] md:max-w-[60%] pt-[100px]">
                <h1 className="text-3xl font-bold">Report Lost Item</h1>

                <form onSubmit={handleLostSubmit} className="shadow lg p-3 text-gray-500 flex flex-col rounded-md gap-3">

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="itemTitle">Item Title</label>
                        <input type="text" name="itemTitle" id="itemTitle" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="e.g Iphone 12, Black bag" onChange={handleDataChange}/>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">

                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="rounded-md p-2 px-4 border-1 border-gray-500" onChange={handleDataChange}>
                            <option value="" selected disabled> Select Category</option>
                            <option value="bags" >Bags</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" className="border-1 border-gray-500 rounded-md h-[150px] p-4 " placeholder="Describe the Item details" onChange={handleDataChange}>

                        </textarea>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="location">Last Known Location</label>
                        <select name="location" id="location" className="rounded-md p-2 px-4 border-1 border-gray-500" onChange={handleDataChange}>
                            <option value="" selected disabled> Select Location</option>
                            <option value="canteen" > Canteen</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="reporterName">Your name</label>
                        <input type="text" name="reporterName" id="reporterName" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="Enter your full name" onChange={handleDataChange}/>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-gray-700">
                        <label htmlFor="reporterContact">Your contact</label>
                        <input type="text" name="reporterContact" id="reporterContact" className="w-full border-1 border-gray-400 p-2 rounded-lg px-6" placeholder="e.g john@gmail.com or 025545872" onChange={handleDataChange}/>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700">
                       <button className="text-center w-full px-4 py-3 bg-blue-600 border-0 shadow-lg rounded-lg text-white hover:bg-blue-700">Submit Lost Item</button>
                    </div>
                </form>
            </main>
        </>
    )
}
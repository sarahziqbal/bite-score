"use client";

import { useState } from "react";
import Button from "./Button";
import ItemList from "./ItemList";

export default function RatingsPanel() {
    const [displayType, setDisplayType] = useState<"category" | "restaurant">("category");

    return(
        <div>
            <div className="search-box m-2">
                <input type="search" placeholder="Search entries" className="mr-3 border"/>
                <Button>Filter</Button>
            </div>
            <div className="border-b">
                <Button active={displayType === "category"} onClick={() => setDisplayType("category")}>Categories</Button>
                <Button active={displayType === "restaurant"} onClick={() => setDisplayType("restaurant")}>Restaurants</Button>
            </div>
            <div>
                <ItemList itemType={displayType}/>
            </div>
            <div>
                <Button>Add Entry</Button>
            </div>
        </div>
    )
}
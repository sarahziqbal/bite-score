import { Restaurant } from "@/src/types/Restaurant"
import RestaurantItem from "./RestaurantItem"
import { Category } from "@/src/types/Category";
import CategoryItem from "./CategoryItem";

type ItemListProps = {
    itemType: string
}

const categoryList: Category[] = [
    {
        id: 1,
        label: "Japanese"
    },
    {
        id: 2,
        label: "Thai"
    }
];

const restaurantList: Restaurant[] = [
    {
        id: 1,
        name: "GaiJin Izakaya",
        address: "1575 Regent Ave, Winnipeg, MB",
        categories: [categoryList[0]],
        rating: 5,
        notes: ""
    },
    {
        id: 2,
        name: "Thida's Thai Restaurant",
        address: "78 Donald St, Winnipeg, MB",
        categories: [categoryList[1]],
        rating: 5,
        notes: ""
    }
];

export default function ItemList({itemType}: ItemListProps) {
    if(itemType === "restaurant") {
        return(
            restaurantList.map((restaurant: Restaurant) => (
                <RestaurantItem key={restaurant.id} restaurantName={restaurant.name}/>
            ))
        )
    }
    else if(itemType === "category") {
        return(
            categoryList.map((category: Category) => (
                <CategoryItem key={category.id} categoryLabel={category.label}/>
            ))
        )
    }
}
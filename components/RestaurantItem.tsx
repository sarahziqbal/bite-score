import Button from "./Button";

type restaurantItemProps = {
    restaurantName: string
}

export default function RestaurantItem({restaurantName}: restaurantItemProps) {
    return(
        <div>
            <Button>{restaurantName}</Button>
        </div>
    )
}
import { Category } from "./Category"

export type Restaurant = {
    id: number,
    name: string,
    address: string,
    categories: Category[]
    rating: number,
    notes: string
}
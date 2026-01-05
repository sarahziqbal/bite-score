import Button from "./Button"

type CategoryItemProps = {
    categoryLabel: string
}

export default function CategoryItem({categoryLabel}: CategoryItemProps) {
    return (
    <div className="flex items-center gap-2 m-3">
        <input className="border" type="checkbox" />
        <span>{categoryLabel}</span>
    </div>
    )
}
export default function ProductCategoryRow({category}) {
    return (
        <tr className="text-neutral-300 bg-neutral-300/25"> 
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
}
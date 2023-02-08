export default function ProductRow({product}) {
    return (
        <tr className="text-center text-neutral-300/75">
            <td className="px-4">
                {product.name}
            </td>
            <td className="p-2">
                {product.price}
            </td>
        </tr>
    )
}
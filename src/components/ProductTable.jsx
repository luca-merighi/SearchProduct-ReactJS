import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({filterProduct}) {
    const products = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ]

    const rows = []
    let lastCategory = null

    products.map(product => {
        if (product.name.toLocaleLowerCase()
                .indexOf(filterProduct.toLocaleLowerCase()) === -1) {
            return
        }

        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category} />
            )
        }
        rows.push(
            <ProductRow 
                product={product} 
                key={product.name} />
        )
        lastCategory = product.category
    })

    return (
        <table className="
            bg-gray-800/50 w-1/4 rounded-md 
            shadow-md shadow-slate-100/5">
            <thead>
                <tr className="text-neutral-200">
                    <th className="p-4">
                        Nome
                    </th>
                    <th className="p-4">
                        Preço
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows.length == 0 ? (
                    <p className="text-neutral-200 px-4 py-2">
                        Parece que não há nada aqui :(
                    </p>

                ) : rows}
            </tbody>
        </table>
    )
}
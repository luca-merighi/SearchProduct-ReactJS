import { useState } from 'react'
import ProductTable from './ProductTable'

export default function SearchContainer() {
    const [filterProduct, setFilterProduct] = useState('')    

    return (
        <main className="
            flex flex-col gap-6 items-center justify-center py-10">
                <input 
                    type="text"
                    placeholder="Pesquise!"
                    value={filterProduct}
                    onChange={(e) => setFilterProduct(e.target.value)}
                    className="
                        bg-gray-600 py-1 px-2
                        border-2 border-gray-600 rounded-md
                        text-neutral-200
                        focus:outline-none 
                        focus:bg-gray-500
                        focus:border-gray-400"/>

                <ProductTable filterProduct={filterProduct} />
        </main>
    )
}
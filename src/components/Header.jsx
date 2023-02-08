import { magnifyingGlassIcon } from '../icons/index'

export default function Header() {
    return (
        <header className="
            bg-gray-800 py-4 text-center">
            <h1 className="
                flex gap-2 items-center justify-center
                text-2xl font-medium text-neutral-200">
                <div className="w-6">{magnifyingGlassIcon}</div>                
                Search <span className="text-sky-500">Product</span> 
            </h1>
        </header>
    )
}
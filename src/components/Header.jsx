import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { images } from "../assets/images"

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <>
            <nav className="bg-background border-b border-border fixed w-full z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-white">
                        <div className="max-w-[100px]">
                            <img src={images.imageD} alt="" className="w-full object-cover" />
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-6 items-center">
                            <Link to="/shop" className="hover:text-primary transition-colors font-medium">Shop</Link>
                        </div>
                        <Link to="/cart" className="relative flex items-center gap-1 text-white hover:text-primary transition-colors">
                            <ShoppingCart size={20} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">{totalItems}</span>
                            )}
                        </Link>
                        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                            <div className="space-y-1">
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed top-0 right-0 h-full w-64 bg-background shadow-xl transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                <div className="flex justify-between items-center px-6 py-4 border-b border-border">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl"><X size={24} /></button>
                </div>
                <div className="flex flex-col mt-6 px-6 gap-4">
                    <Link to="/shop" className="hover:text-primary transition-colors font-medium" onClick={() => setSidebarOpen(false)}>Shop</Link>
                </div>
            </div>

            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
            )}
        </>
    )
}

export default Header
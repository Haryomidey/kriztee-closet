import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { useCart } from "../contexts/CartContext"

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()

    const truncate = (text, length) => {
        if (!text) return ""
        return text.length > length ? text.slice(0, length) + "..." : text
    }

    const handleAddToCart = () => {
        addToCart(product, 1)
        toast.success(`${product.title} added to cart!`)
    }

    return (
        <div className="border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col bg-background text-foreground">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">{truncate(product.title, 25)}</h3>
                    <p className="text-primary font-bold mb-1">{product.price}</p>
                    <p className="text-muted-foreground text-sm mb-2">{truncate(product.description, 40)}</p>
                    <p className="text-muted-foreground text-xs mb-2">{product.location}</p>
                </div>
                <div className="mt-3 flex flex-col md:flex-row gap-2">
                    <Link
                        to={`/product/${product.slug}`}
                        className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-colors text-center font-semibold"
                    >
                        View Product
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-black border-white border text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-semibold"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
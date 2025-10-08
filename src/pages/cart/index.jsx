import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
    const { cart = [], removeFromCart, updateQuantity, totalPrice } = useCart()

    if (!cart || cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
                <div className="bg-secondary p-12 rounded-2xl shadow-lg flex flex-col items-center gap-6">
                    <ShoppingCart size={60} className="text-primary" />
                    <h1 className="text-4xl font-bold text-white">Your Cart is Empty</h1>
                    <p className="text-muted-foreground text-lg max-w-sm">
                        Looks like you haven't added any products yet. Start shopping to fill your cart with amazing products!
                    </p>
                    <Link
                        to="/shop"
                        className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Go to Shop
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 mt-24">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left">Your Cart</h1>
            <div className="grid gap-6">
                {cart.map(item => (
                    <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center gap-4 bg-background border border-border p-4 rounded-xl shadow-lg transition hover:shadow-2xl"
                    >
                        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg" />
                        <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full">
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                                <p className="text-primary font-bold mt-1">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <button
                                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                                    onClick={() => {
                                        updateQuantity(item.id, item.quantity - 1)
                                    }}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="text-white font-medium">{item.quantity}</span>
                                <button
                                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                                    onClick={() => {
                                        updateQuantity(item.id, item.quantity + 1)
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    className="ml-4 text-red-500 hover:text-red-600 transition font-semibold"
                                    onClick={() => {
                                        removeFromCart(item.id)
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-end items-center gap-6">
                <span className="text-2xl font-semibold text-white">
                    Total: ₦ {totalPrice.toLocaleString()}
                </span>
                <Link
                    to="/checkout"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    )
}

export default Cart
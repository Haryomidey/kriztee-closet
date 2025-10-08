import { useCart } from "../../contexts/CartContext"

const Checkout = () => {
    const { cart = [], totalPrice } = useCart()
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="max-w-5xl mx-auto px-6 py-20 text-center mt-20">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Your Cart is Empty
                </h1>
                <p className="text-muted-foreground mb-6">
                    Add some products to your cart to proceed with checkout.
                </p>
                <a
                    href="/shop"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Go to Shop
                </a>
            </div>
        )
    }

    const handlePlaceOrder = () => {
        if (cart.length === 0) return

        const message = cart.map(item =>
            `${item.title} x ${item.quantity} = ₦${(
                parseInt(item.price.replace(/\D/g, "")) * item.quantity
            ).toLocaleString()}`
        ).join('\n')

        const finalMessage = `Hello! I want to place an order:\n${message}\nTotal: ₦${totalPrice.toLocaleString()}`

        const whatsappURL = `https://wa.me/2347084557191?text=${encodeURIComponent(finalMessage)}`
        window.open(whatsappURL, "_blank")
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-12 text-white text-center">
                Checkout
            </h1>
            <div className="bg-background p-8 rounded-2xl shadow-xl flex flex-col gap-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    Order Summary
                </h2>
                <div className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center text-white border-b border-border pb-2"
                        >
                            <span className="font-medium">
                                {item.title} x {item.quantity}
                            </span>
                            <span className="font-semibold">
                                ₦ {(parseInt(item.price.replace(/\D/g, "")) * item.quantity).toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-white font-semibold text-lg border-t border-border pt-3">
                    <span>Total ({itemCount} items)</span>
                    <span>₦ {totalPrice.toLocaleString()}</span>
                </div>
                <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Place Order on WhatsApp
                </button>
            </div>
        </div>
    )
}

export default Checkout;
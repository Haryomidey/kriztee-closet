import { useParams, Link } from "react-router-dom"
import { products } from "../../data/data"
import { useCart } from "../../contexts/CartContext"
import toast from "react-hot-toast"

const ProductDetail = () => {
    const { slug } = useParams()
    const product = products.find(p => p.slug === slug)
    const { addToCart } = useCart()

    if (!product) 
        return <div className="text-center py-20 text-2xl text-white mt-20">Product not found</div>

    const handleAddToCart = () => {
        addToCart(product, 1)
        toast.success(`${product.title} added to cart!`)
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 pt-[100px]">
            <div className="flex flex-col gap-4">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform" 
                />
                <div className="flex gap-4 mt-4">
                    <button 
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:scale-105 transition-transform font-semibold shadow-lg"
                    >
                        Add to Cart
                    </button>
                    <Link 
                        to="/shop" 
                        className="flex-1 border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold text-center"
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">{product.title}</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold">{product.price}</p>
                <p className="text-white text-sm sm:text-lg md:text-xl">{product.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Location:</span>
                    <span className="font-medium">{product.location}</span>
                </div>

                {product.verified && (
                    <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold w-max">
                        Verified Seller
                    </span>
                )}

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Product Highlights</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>High-quality product</li>
                        <li>Available while stocks last</li>
                        <li>Fast shipping and delivery</li>
                        <li>Secure payment options</li>
                    </ul>
                </div>

                <div className="mt-6 bg-secondary p-4 rounded-lg shadow-inner">
                    <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
                    <p className="text-muted-foreground text-sm">
                        Contact our support team for more information about this product.
                    </p>
                    <a 
                        href="https://wa.me/2347084557191"
                        target="_blank"
                        className="inline-block mt-2 text-primary font-semibold hover:underline"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
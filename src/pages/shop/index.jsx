import ProductCard from "../../components/ProductCard"
import { products } from "../../data/data"

const Shop = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 mt-20">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-4">Shop Our Collection</h1>
                <p className="text-muted-foreground text-xs sm:text-lg">Discover the latest products with unbeatable quality and style.</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <div className="flex gap-2 items-center">
                    <span className="text-white font-semibold">Filter by:</span>
                    <select className="bg-background border border-muted text-white px-3 py-2 rounded-lg">
                        <option value="">All Categories</option>
                        <option value="watches">Watches</option>
                        <option value="bags">Bags</option>
                        <option value="shoes">Shoes</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-white font-semibold">Sort by:</span>
                    <select className="bg-background border border-muted text-white px-3 py-2 rounded-lg">
                        <option value="latest">Latest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(p => (
                    <div key={p.id}>
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
import { products } from "../../data/data";
import ProductCard from "../../components/ProductCard";
import Hero from "../../components/HeroBanner";
import ShopByCategory from "../../components/ShopByCategory";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-background text-foreground">

            <Hero />

            <ShopByCategory />

            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 9).map((p, index) => (
                        index === 7 ? null : <ProductCard key={index} product={p} />
                    ))}

                </div>

                <Link to="/shop" className="block text-center mt-8 text-lg font-semibold border border-white py-2 px-8 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors w-fit mx-auto">
                    View All New Arrivals
                </Link>
            </section>

            <section className="bg-muted py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-secondary p-6 rounded-lg shadow-md">
                            <p className="text-muted-foreground mb-4">
                                "Absolutely love the quality and design. Fast delivery too!"
                            </p>
                            <h4 className="font-semibold">- Ada O.</h4>
                        </div>
                        <div className="bg-secondary p-6 rounded-lg shadow-md">
                            <p className="text-muted-foreground mb-4">
                                "Great prices and excellent customer service. Highly recommend!"
                            </p>
                            <h4 className="font-semibold">- Chike U.</h4>
                        </div>
                        <div className="bg-secondary p-6 rounded-lg shadow-md">
                            <p className="text-muted-foreground mb-4">
                                "Stylish and durable products. I keep coming back for more!"
                            </p>
                            <h4 className="font-semibold">- Fatima S.</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary text-foreground">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                    <p className="mb-6 text-muted-foreground">
                        Get updates on new arrivals, special offers, and exclusive deals.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg flex-1 bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
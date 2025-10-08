import { Link } from "react-router-dom";

const categories = [
    { name: "Bags", query: "bags" },
    { name: "Shoes", query: "shoes" },
    { name: "Clothing", query: "clothing" },
    { name: "Watches", query: "watches" },
    { name: "Accessories", query: "accessories" },
    { name: "Beauty", query: "beauty" },
];

const ShopByCategory = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.query}
                        to={`/shop?category=${category.query}`}
                        className="border border-border bg-background hover:bg-secondary text-foreground hover:text-primary rounded-lg p-4 text-center font-medium transition-colors"
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;
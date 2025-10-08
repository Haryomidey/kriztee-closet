// import { categories } from "../../data/data"

const Categories = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-10">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* {categories.map(cat => (
                    <div key={cat.id} className="border border-border rounded-lg overflow-hidden">
                        <img src={cat.image} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center font-medium">{cat.name}</div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Categories
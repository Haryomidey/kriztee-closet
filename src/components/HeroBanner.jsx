import { Link } from "react-router-dom"
import { images } from "../assets/images"

const Hero = () => {
    return (
        <section className="bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center mt-10">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-5xl md:text-6xl font-semibold mb-4">Discover Your Style</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Shop the latest fashion trends with comfort, elegance, and unbeatable prices.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link
                            to="/shop"
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-center"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <img
                    src={images.hero}
                    alt="Fashion Hero"
                    className="rounded-2xl shadow-lg object-cover w-full h-full mx-auto"
                />
            </div>
        </section>
    )
}

export default Hero
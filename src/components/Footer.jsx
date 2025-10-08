import { images } from "../assets/images";

const Footer = () => {
    return (
        <footer className="bg-secondary mt-16 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-2">
                    <div className="max-w-[100px]">
                        <img src={images.imageD} alt="" className="w-full object-cover" />
                    </div>
                    <p className="text-muted-foreground">Quality fashion at your fingertips.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/shop" className="hover:text-primary transition-colors">Shop</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold mb-2">Newsletter</h2>
                    <p className="text-sm text-muted-foreground">Subscribe to receive updates and exclusive offers.</p>
                    <form className="flex flex-col sm:flex-row gap-3 mt-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 rounded-lg border border-border bg-background text-white focus:outline-none focus:border-primary transition-colors flex-1"
                        />
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:scale-105 transition-transform font-semibold">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm py-4 border-t border-border mt-8">
                © 2025 Kriztee's Closet. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;
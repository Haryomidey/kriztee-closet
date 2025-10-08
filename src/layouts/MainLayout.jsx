import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
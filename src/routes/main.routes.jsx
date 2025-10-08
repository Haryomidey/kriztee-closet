import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/home"
import Shop from "../pages/shop"
import Categories from "../pages/categories"
import ProductDetail from "../pages/product-details"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import NotFound from "../pages/error"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/categories", element: <Categories /> },
            { path: "/product/:slug", element: <ProductDetail /> },
            { path: "/cart", element: <Cart /> },
            { path: "/checkout", element: <Checkout /> },
            { path: "*", element: <NotFound /> },
        ],
    },
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
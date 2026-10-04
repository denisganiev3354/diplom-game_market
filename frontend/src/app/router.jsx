import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../widgets/Layout/layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { CheckoutPage } from "../pages/CheckoutPage/CheckotPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { AdminPage } from '../pages/AdminPage/AdminPage';
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFountPage />,
        children:[
            {index: true, element: <HomePage/>},
            {path: 'catalog', element:<CatalogPage /> },
            {path: 'product/:id',element:<ProductPage />},
            {path: 'profile',element:<ProfilePage />},
            {path: 'checkout',element:<CheckoutPage />},
            {path: 'login',element: <LoginPage />},
            {path: 'register',element:<RegisterPage />},
            {path: 'admin',element:<AdminPage />},
            {path: '*',element:<NotFoundPage />},
        ],w
    }
]) 
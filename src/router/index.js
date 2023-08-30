import Main from "../pages/Main";
import Pizzas from "../pages/Pizzas";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export const privateRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/pizzas', component: Pizzas, exact: true},
    {path: '/pizzas/:id', component: Product, exact: true},
    {path: '/profile', component: Profile, exact: true},
]

export const publicRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/pizzas', component: Pizzas, exact: true},
    {path: '/pizzas/:id', component: Product, exact: true},
    {path: '/register', component: Register, exact: true},
]
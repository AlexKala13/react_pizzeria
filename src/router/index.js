import Main from "../pages/Main";
import Pizzas from "../pages/Pizzas";
import Product from "../pages/Product";

export const publicRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/pizzas', component: Pizzas, exact: true},
    {path: '/pizzas/:id', component: Product, exact: true},
]
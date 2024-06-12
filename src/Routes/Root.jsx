import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export const routerRoute = [{
    path: "/",
    name: "Index",
    element: <Home />,
    errorElement: <Error />
},
{
    path: "/about",
    name: "About",
    element: <About />
},
{
    path: "/contact",
    name: "Contact",
    element: <Contact />
}
]
export const router = createBrowserRouter(routerRoute);
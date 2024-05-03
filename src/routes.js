import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Home from "./home/home";
import Search from "./search/search";
import Add from "./add/add";
import Debit from "./add/debit";
import Credit from "./add/credit";
import Transact from "./trans/trans";
import Auth from "./auth/auth";
import Login from "./auth/login/login";
import Register from "./auth/register/register";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/add",
                element: <Add />,
                children: [
                    {
                        path: "debit",
                        element: <Debit />
                    },
                    {
                        path: "credit",
                        element: <Credit />
                    }
                ]
            },
            {
                path: "/transactions",
                element: <Transact />
            }
        ]
    },{
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

export default routes;
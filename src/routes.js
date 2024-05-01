import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Home from "./home/home";
import Search from "./search/search";
import Add from "./add/add";
import Debit from "./add/debit";
import Credit from "./add/credit";
import Transact from "./trans/trans";


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
    }
]);

export default routes;
import Index from "@/app/components/pages/Home/Index";
import Login from "@/app/components/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children:[
            {path: 'Login', element: <Login/>},
        ]

    }
])
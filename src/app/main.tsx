import store from '@/hooks';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import Error from "@/pages/error";

import Home from '@/pages/home';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: 'project/:projectID',
                        element: <></>
                    }
                ]
            }
        ],
        errorElement: <Error />
    }
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Provider store={store}>
    <RouterProvider router={router} />
</Provider>);

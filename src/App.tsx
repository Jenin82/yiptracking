import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./services/PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";
import NotFound from "./modules/NotFound/NotFound";
import Login from "./modules/pages/Login";

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/404",
            element: <NotFound />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/",
            element: <PrivateRoute />,
            children: [
                {
                    path: "/",
                    element: <NotFound />,
                },

                // {
                //     path: "qr",
                //     element: <QR />,
                // },
            ],
        },
    ]);
    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />
            <RouterProvider router={router} />
        </>
    );
}

export default App;

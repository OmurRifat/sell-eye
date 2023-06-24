import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import AllOrders from "../../Pages/AllOrders";
import RegularDelivery from "../../Pages/RegularDelivery";
import ExpressDelivery from "../../Pages/ExpressDelivery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <AllOrders></AllOrders>
            },
            {
                path: '/all-orders',
                element: <AllOrders></AllOrders>
            },
            {
                path: '/regular-delivery',
                element: <RegularDelivery></RegularDelivery>
            },
            {
                path: '/express-delivery',
                element: <ExpressDelivery></ExpressDelivery>
            }
        ]
    }
])

export default router;
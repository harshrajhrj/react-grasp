import { Outlet } from "react-router-dom"
export const Orders = () => {
    return (
        <div>
            <h1>Order 1</h1>
            <h1>Order 2</h1>
            <h1>Order 3</h1>
            <Outlet />
        </div>
    )
}

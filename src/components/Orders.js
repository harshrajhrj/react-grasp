import { Outlet, useSearchParams } from "react-router-dom"
export const Orders = () => {
    const [orderParam, setOrderParam] = useSearchParams();
    const showActiveOrders = orderParam.get('filter') === 'active';
    return (
        <div>
            <h1>Order 1</h1>
            <h1>Order 2</h1>
            <h1>Order 3</h1>
            <button className="btn" onClick={() => { setOrderParam({ filter: 'active' }) }}>Active orders</button>
            <button className="btn" onClick={() => { setOrderParam({}) }}>Inactive orders</button>
            {
                showActiveOrders ? <h2>Showing active orders</h2> : <h2>Showing  all orders</h2>
            }
            <Outlet />
        </div>
    )
}

import { useParams } from "react-router-dom"

export const OrderDetails = () => {
    const { orderid } = useParams();
    return (
        <div>OrderDetails of {orderid}</div>
    )
}
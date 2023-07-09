import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>OrderSummary</div>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

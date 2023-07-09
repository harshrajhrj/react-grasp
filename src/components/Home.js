import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home</div>
            <button className='btn' onClick={() => navigate('order-summary')}>Place an order</button>
        </>
    );
}

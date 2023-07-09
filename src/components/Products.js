import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='Search products' />
            </div>
            <nav>
                <Link to='category'>Category</Link>
                <Link to='new'>New Product</Link>
            </nav>
            <Outlet />
        </>
    )
}

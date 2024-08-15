import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-gray-800 text-white py-4 shadow-lg z-10">
            <div className="container mx-auto flex justify-around">
                <Link to="/" className="hover:text-gray-300">Users</Link>
                <Link to="/products" className="hover:text-gray-300">Products</Link>
            </div>
        </div>
    );
};

export default Navbar;

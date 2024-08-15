import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
    return (
        <>          
            <div className="fixed top-0 w-full bg-gray-800 py-4 shadow-lg z-10">
                <div className="container mx-auto flex justify-around">
                    <NavLink to="/" className=" duration-300 text-gray-300">Users</NavLink>
                    <NavLink to="/products" className=" duration-300 text-gray-300">Products</NavLink>
                </div>
            </div>
            <div className="pt-20">
                <Routes>
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;

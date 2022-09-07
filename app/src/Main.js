import './App.css';

import { Link, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function Main() {
    return (
        <div className="Main">
            <header className="Head">
                Chromemaster
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
            <hr />
            <div>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/about" element={ <About /> }></Route>
                    <Route path="/products" element={ <Products /> }></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Main;
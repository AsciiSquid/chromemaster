import './App.css';

import { Link, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function Main() {
    const location = useLocation();

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
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes location={location}>
                        <Route path="/" element={ <Home /> }></Route>
                        <Route path="/about" element={ <About /> }></Route>
                        <Route path="/products" element={ <Products /> }></Route>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Main;
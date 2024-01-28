import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function Main() {

    return (
        <div className="Main">
            <header>
                <h1></h1>
            </header>
            <div className="container">
                <Home></Home>
                <About></About>
                <Products></Products>
            </div>
            <footer>
                Website by Dawson Wiebe
            </footer>
        </div>
    )
}

export default Main;
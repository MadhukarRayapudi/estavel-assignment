import { Link } from "react-router-dom";

import { TfiShoppingCart } from "react-icons/tfi";

import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png" alt="logo" className="logo" />
            <div className = "navbar-items-container">
                <Link className = "navbar-links" to="/shop">Shop By Category</Link>
                <Link className = "navbar-links" to="/become-a-verified-partner">Partner with us</Link>
            </div>
            <div>
                <input type="search" className="search-box" placeholder="Search for products..." />
                <Link to = "/cart" className = "cart-icon" > <TfiShoppingCart /> </Link>
            </div>
        </nav>
    );
}

export default Navbar;

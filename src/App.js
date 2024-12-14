import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import BestSellers from "./Components/BestSellers"
import BecomePartner from "./Components/BecomePartner"
import ShopByCategory from "./Components/ShopByCategory";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path = "/best-sellers" element = {<BestSellers />} />
                <Route path = "/become-a-verified-partner" element = {<BecomePartner />} />
                <Route path = "/shop" element = {<ShopByCategory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

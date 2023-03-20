import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import GuideOfChoice from "./components/GuideOfChoice/GuideOfChoice";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import Cart from "./components/Cart/Cart";
import RulesOfDelivery from "./components/RulesOfDelivery/RulesOfDelivery";
import Contacts from "./components/Contacts/Contacts";

function App() {
    const [cartActive, setCartActive] = useState(false)


    return (
        <div className="App">
            <Header active={cartActive} setActive={setCartActive}/>
            <Cart active={cartActive} setActive={setCartActive}/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/products/:category" element={<Products/>}/>
                <Route path="/product/:id" element={<ProductDetails/>}/>
                <Route path="/guide" element={<GuideOfChoice/>}/>
                <Route path="/delivery" element={<RulesOfDelivery/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

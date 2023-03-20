import React, {useState} from "react";

import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProductsThunk} from "../../Redux/Reducers/products-reducer";
import {useParams, useLocation} from "react-router-dom";
import {parseQueryString} from "../../helpers";

import Product from "../Product/Product";
// import Cart from "../Cart/Cart";

import "./Products.scss";
import Preloader from "../Preloader/Preloader";


const Products = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const {category} = useParams();
    const location = useLocation();
    const queryParams = parseQueryString(location.search);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        dispatch(getProductsThunk({
            category, brand: queryParams.brand, puffsCount: queryParams.puffsCount,
        }));
        setLoading(false);
    }, []);

    let shuffledProducts = products.sort(() => Math.random() - 0.5);

    return (<section className="products">
        <div className="container">
            <h2 className="category-title">{category === "pods" ? "Одноразки" : category === "tobaccos" ? 'Тютюн для кальяну' : category === "coal" ? "Вугілля" : ''}</h2>
            <div className="products-cards">
                {loading ? <Preloader/> :
                    <div className="products-holder">


                        <div className="filters">
                        <span className="filter-title">
                        Ціна:
                        </span>
                            <div className="price-content">
                                <div>

                                </div>
                            </div>

                            <div className="range-slider">
                            </div>
                        </div>

                        <div className="products-wrapper">
                            {category === "pods" ? <div className="categories-holder">
                                <div className="block">
                                    <Link className='category-link' to='/products/pods?brand=Brusko-go'>Brusko-go</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/pods?brand=Elf-bar'>Elf-bar</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/pods?brand=HQD'>HQD</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/pods?brand=Serbetli'>Serbetli</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/pods?brand=VAAL'>VAAL</Link>
                                </div>
                            </div> : category === 'tobaccos' ? <div className="categories-holder">
                                <div className="block">
                                    <Link className='category-link' to='/products/tobaccos?brand=Adalya'>Adalya</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/tobaccos?brand=Al%20Fakher'>Al
                                        Fakher</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/tobaccos?brand=Asti'>Asti</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link'
                                          to='/products/tobaccos?brand=Brusko-go'>Brusko-go</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/tobaccos?brand=Buta'>Buta</Link>
                                </div>
                                <div className="block">
                                    <Link className='category-link' to='/products/tobaccos?brand=Dead-horse'>Dead
                                        Horse</Link>
                                </div>
                            </div> : ''}
                            <div className="products-cards-holder">
                                {shuffledProducts.map((product) => {
                                    return (
                                        <Product
                                            key={product.id}
                                            title={product.title}
                                            image={product.image}
                                            price={product.price}
                                            id={product.id}
                                            available={product.is_availible}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </section>);
};

export default Products;

import {Link} from "react-router-dom";

import './ChooseProduct.scss'

import podProductHighlight from './../../assets/electroPicture.png'
import tobaccoProductHighlight from './../../assets/tobaccoPicture.png';
import coalProductHighlight from './../../assets/coalPicture.png';

const ChooseProduct = () => {
    return (
        <section className="products-choose">
            <div className="container">
                <div className="products-choose-holder">
                    <div className="pods-product-holder">
                        <h2 className="product-title">
                            ОДНОРАЗКИ
                        </h2>
                        <Link to='/products/pods'>
                            <span className="buy">КУПИТИ</span>
                            <div className="product-img-holder">
                                <img src={podProductHighlight} alt="Pods Image"/>
                            </div>
                        </Link>
                    </div>
                    <div className="tobacco-product-holder">
                        <h2 className="product-title">
                            ТЮТЮН ДЛЯ КАЛЬЯНУ
                        </h2>
                        <Link to='/products/tobaccos'>
                            <span className="buy">КУПИТИ</span>
                            <div className="product-img-holder">
                                <img src={tobaccoProductHighlight} alt="Tobacco Image"/>
                            </div>
                        </Link>
                    </div>
                    <div className="coal-product-holder">
                        <h2 className="product-title">
                            ВУГІЛЛЯ
                        </h2>
                        <Link to='products/coal'>
                        <span className="buy">КУПИТИ</span>
                        <div className="product-img-holder">
                            <img src={coalProductHighlight} alt="Coal Image"/>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseProduct;
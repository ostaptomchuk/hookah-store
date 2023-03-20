import React from "react";
import {Link} from "react-router-dom";
import "./Product.scss";

const Product = ({title, price, image, id, available}) => {

    const isDisabled = (available) ? false : true;
    return (
        <section className="item">
            <div className="item-holder">
                <Link to={`/product/${id}`}>
                    <div className="item-img-holder">
                        <img src={image} alt="Product Image"/>
                    </div>
                </Link>
                <div className="item-description">
                    <h2 className="item-title">{title}</h2>
                    <div className="item-specs">
                        <span className="item-price">{`${price.value} ${price.currency}`}</span>
                        <span className={available ? 'yes-availible' : 'no-availible'}>
              {available ? "Є в наявності" : "Немає в наявності"}
            </span>
                    </div>
                    <button disabled={isDisabled} className={isDisabled ? "buy-btn-disabled" : "buy-btn"}><i
                        className="icon-location-shopping"> </i>Купити
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Product;

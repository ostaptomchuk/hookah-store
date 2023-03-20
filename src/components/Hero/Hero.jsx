import "./HeroStyle.scss";
// import Product from "../Product/Product";
import Slider from "../Slider/Slider";
import ChooseProduct from "../ChooseProduct/ChooseProduct";

const Hero = () => {
    return (
        <section className="hero">

            <div className="container">
                <div className="hero-holder">
                    <Slider/>
                    <ChooseProduct/>
                </div>
            </div>
        </section>
    )
        ;
};

export default Hero;

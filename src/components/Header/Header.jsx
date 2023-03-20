import {Link} from "react-router-dom";

import logoHookah from "../../assets/logo.svg";

import "./HeaderStyle.scss";
import "./../../fonts/icomoon/style.css"

const Header = ({setActive}) => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-holder">
                        <div className="tel-holder">
                            <a className="telephone" href="tel: (093) 73 000 00"><i className='icon-phone'></i>(093) 73 000 00</a>
                        </div>
                        <div className="cart-holder">
                            <button className="shopping-cart" onClick={ () => setActive(true)} ><i className="icon-shopping-cart"></i>Ваші покупки</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom-holder">
                        <div className="logo-holder">
                            <Link to='/'>
                                <img src={logoHookah} alt="header-logo"/>
                            </Link>
                        </div>
                        <div className="navigation">
                            <ul className="menu">
                                <li className="menu-item">
                                    <Link className="item-link" to="/">
                                        Головна
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="item-link" to="/guide">
                                        Гід по вибору
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="item-link" to="/delivery">
                                        Правила доставки
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className="item-link" to="/contacts">
                                        Контакти
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

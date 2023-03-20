import './Footer.scss'
import logoHookah from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-holder">
                    <div className="upper-holder">
                        <div className="footer-logo-holder">
                            <Link to='/'>
                                <img src={logoHookah} alt="header-logo"/>
                            </Link>

                        </div>
                        <div className="socials">
                            <ul className="social-items">
                                <li className="social-item"><i className="icon-location icon"></i>Новий Розділ, Україна</li>
                                <li className="social-item"><a href="mailto: info@vape-hub.com.ua"
                                                               className="social-link"><i className="icon-gmail icon"></i>info@vape-hub.com.ua</a>
                                </li>
                                <li className="social-item"><a href="" className="social-link"><i
                                    className="icon-send icon"></i>Telegram</a></li>
                                <li className="social-item"><a href="" className="social-link"><i
                                    className="icon-instagram icon"></i>Instagram</a></li>
                                <li className="social-item"><i className="icon-watch icon"></i>Щодня з 10:00 до 20:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-holder">
                        <span
                            className="copyright">{new Date().getFullYear()}. Vape Hub. Made with love to Ukraine &#x1F499;&#x1F49B;</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
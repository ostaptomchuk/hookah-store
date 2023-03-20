import preloader from './../../assets/preloader.gif';
import './Preloader.scss'

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader
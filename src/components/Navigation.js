import './Navigation.css';
import { Link } from "react-router-dom";
import img1 from "./images/vector2.svg";
import img2 from "./images/vector3.svg";
import img3 from "./images/vector5.svg";
import img4 from "./images/vector6.svg";
import img5 from "./images/vector4.svg";


function Navigation() {

    return (
        <header className='navigation'>
            <div className="nav1">
                <div className="nav1-color1">
                    <div className='nav1-content1'><Link className='link'>THE HOLIDAY SHOP UP TO 40% 0FF</Link></div>
                </div>
                <div className="nav1-color2">
                    <div className='nav1-content2'><Link className='link'>THE HOLIDAY SHOP UP TO 40% 0FF</Link></div>
                </div>
                <div className="nav1-color3">
                    <div className='nav1-content3'><Link className='link'>GET UNLIMITED NEXT DAY DELIVERY + FREE RETURNS FOR £6.99 WAS <span>£9.99</span></Link></div>
                </div>
            </div>
            <div className="nav2">
                <div></div>
                <div>
                    <ul>
                        <li className='list'>
                            <Link to="/" className='nav-link'>NEW IN</Link>
                        </li>
                        <li className='list'>
                            <Link to="/about" className='nav-link'>CLOTHING</Link>
                        </li>
                        <li className='list'>
                            <Link to="/menu" className='nav-link'>DRESSES</Link>
                        </li>
                        <li className='list'>
                            <Link to="/contact" className='nav-link'>SHOES</Link>
                        </li>
                        <li className='Logo'>
                            <div className='logo'>
                                <Link to="/" className='nav-link'><img src={img1} alt="" /></Link>
                            </div>
                        </li>
                        <li className='list'>
                            <Link to="/classcomp" className='nav-link'>SUMMER CLOTHES</Link>
                        </li>
                        <li className='list'>
                            <Link to="/cart" className='nav-link'>SALE</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='list'>
                            <Link to="/classcomp" className='nav-link'>
                                <img src={img2} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link to="/classcomp" className='nav-link'>
                                <img src={img3} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link to="/classcomp" className='nav-link'>
                                <img src={img4} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link to="/classcomp" className='nav-link'>
                                <img src={img5} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navigation;
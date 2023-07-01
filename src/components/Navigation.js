import './Navigation.css';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img1 from "./images/vector2.svg";
import img2 from "./images/vector3.svg";
import img3 from "./images/vector5.svg";
import img4 from "./images/vector6.svg";
import img5 from "./images/vector4.svg";
import megamenu1 from "./images/DP_WK22_WEB_Nav_Imagery-NEW-IN (2).jpg";
import megamenu2 from "./images/DP_WK22_WEB_Nav_Imagery-CLOTHING (2).jpg";
import megamenu3 from "./images/DP_WK22_WEB_Nav_Imagery-DRESSES (2).jpg";
import megamenu4 from "./images/DP_WK22_WEB_Nav_Imagery-SHOES (2).jpg";
import megamenu5 from "./images/DP_WK22_WEB_Nav_Imagery-HOLIDAY-SHOP (2).jpg";
import megamenu6 from "./images/DP-DROPDOWN-SALE-WK41 (2).jpg";
// IoCloseOutline


function Navigation() {

    return (
        <header className='navigation'>
            <div className="nav1">
                <div className="nav1-color1">
                    <div className='nav1-content'><Link className='link'>THE HOLIDAY SHOP UP TO 40% 0FF</Link></div>
                </div>
                <div className="nav1-color2">
                    <div className='nav1-content'><Link className='link'>THE HOLIDAY SHOP UP TO 40% 0FF</Link></div>
                </div>
                <div className="nav1-color3">
                    <div className='nav1-content'><Link className='link'>GET UNLIMITED NEXT DAY DELIVERY + FREE RETURNS FOR £6.99 WAS <span>£9.99</span></Link></div>
                </div>
            </div>
            <div className="nav2">
                <div className='flex'>
                    <ul className='nav2-ul-icons'>
                    <li>
                    <label htmlFor="menu-btn" className='btn menu-btn'><IoMenuOutline /></label>
                    </li>
                        <li className='list'>
                            <Link className='nav-link'>
                                <img src={img4} alt="" />
                            </Link>
                        </li>
                    </ul>

                </div>
                <div>
                    <input type="radio" name="slide" id="menu-btn" />
                    <input type="radio" name="slide" id="cancel-btn" />
                    <ul className='nav2-ul nav2-ul_menu'>
                        <label htmlFor="cancel-btn" className='btn cancel-btn'><IoCloseOutline /></label>
                        <li className='list'>
                            <Link to="/" className='nav-link nav-menu'>NEW IN</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row group1">
                                        <p>NEW ARRIVALS</p>
                                        <ul class="mega-links">
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New In</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Last Piece</a></li>
                                            <li><a href="#">Ramadan Edit</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group2">
                                        <p>TRENDING</p>
                                            <ul class="mega-links">
                                                <li><a href="#">Coats and Long Jackets</a></li>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Pants</a></li>
                                            </ul>
                                        
                                    </div>
                                    <div class="row group3">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group4">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu1} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='list'>
                            <Link className='nav-link nav-menu'>CLOTHING</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row group1">
                                        <p>SHOP BY CATEGORY</p>
                                        <ul class="mega-links">
                                            <li><Link to="/shop" className='dresses'>Dresses</Link></li>
                                            <li><a href="#">Shoes</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Summer</a></li>
                                            <li><a href="#">Trousers</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group2">
                                        <p>SHOP BY COLLECTIONS</p>
                                            <ul class="mega-links">
                                                <li><a href="#">Coats and Long Jackets</a></li>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Pants</a></li>
                                            </ul>
                                        
                                    </div>
                                    <div class="row group3">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group1">
                                        <p>SHOP BY SIZE</p>
                                        <ul class="mega-links">
                                            <li><Link to="/shop" className='dresses'>Dresses</Link></li>
                                            <li><a href="#">Small</a></li>
                                            <li><a href="#">Medium</a></li>
                                            <li><a href="#">Large</a></li>
                                            <li><a href="#">Extra Large</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group4">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu2} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='list'>
                            <Link className='nav-link nav-menu'>DRESSES</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row group1">
                                        <p>NEW ARRIVALS</p>
                                        <ul class="mega-links">
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New In</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Last Piece</a></li>
                                            <li><a href="#">Ramadan Edit</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group2">
                                        <p>TRENDING</p>
                                            <ul class="mega-links">
                                                <li><a href="#">Coats and Long Jackets</a></li>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Pants</a></li>
                                            </ul>
                                        
                                    </div>
                                    <div class="row group3">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group4">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu3} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='list'>
                            <Link className='nav-link nav-menu'>SHOES</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row group1">
                                        <p>NEW ARRIVALS</p>
                                        <ul class="mega-links">
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New In</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Last Piece</a></li>
                                            <li><a href="#">Ramadan Edit</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group2">
                                        <p>TRENDING</p>
                                            <ul class="mega-links">
                                                <li><a href="#">Coats and Long Jackets</a></li>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Pants</a></li>
                                            </ul>
                        
                                    </div>
                                    <div class="row group3">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group4">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu4} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='Logo'>
                            <div className='logo'>
                                <Link to="/" className='nav-link'><img src={img1} alt="" /></Link>
                            </div>
                        </li>
                        <li className='list'>
                            <Link className='nav-link nav-menu'>SUMMER CLOTHES</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row group1">
                                        <p>NEW ARRIVALS</p>
                                        <ul class="mega-links">
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New In</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Last Piece</a></li>
                                            <li><a href="#">Ramadan Edit</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group2">
                                        <p>TRENDING</p>
                                        <ul class="mega-links">
                                                <li><a href="#">Coats and Long Jackets</a></li>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Pants</a></li>
                                            </ul>
                                    </div>
                                    <div class="row group3">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row group4">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu5} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='list'>
                            <Link className='nav-link nav-menu'>SALE</Link>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row">
                                        <p>NEW ARRIVALS</p>
                                        <ul class="mega-links">
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New In</a></li>
                                            <li><a href="#">Best Sellers</a></li>
                                            <li><a href="#">Last Piece</a></li>
                                            <li><a href="#">Ramadan Edit</a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <p>TRENDING</p>
                                        <ul class="mega-links">
                                            <li><a href="#">Coats and Long Jackets</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">Blazers</a></li>
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Pants</a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <p>OFFERS</p>
                                        <ul class="mega-links">
                                            <li><a href='#'>Spring Summer 2023</a></li>
                                            <li><a href='#'>Fall Winter 2022</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Knitwear</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <Link>
                                            <div class="group4_img">
                                                <img src={megamenu6} alt="" />
                                            </div>
                                            {/* <p>SHOP THE NEW FALL WINTER 2022 COLLECTION</p> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* <label htmlFor="menu-btn" className='btn menu-btn'><IoMenuOutline/></label> */}
                </div>
                <div>
                    <ul className='nav2-ul nav2-ul-icons'>
                        <li className='list'>
                            <Link className='nav-link'>
                                <img src={img2} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link to='/signin' className='nav-link trial'>
                                <img src={img3} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link className='nav-link trial'>
                                <img src={img4} alt="" />
                            </Link>
                        </li>
                        <li className='list'>
                            <Link to="/cart" className='nav-link'>
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
// import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import './Footer.css';
import img1 from "./images/PAYMENT-STRIP-BOTTOM-HP.png";
import img2 from "./images/vector12.svg";
import img3 from "./images/vector11.svg";
import img4 from "./images/vector10.svg";
import img5 from "./images/vector9.svg";
import img6 from "./images/vector8.svg";
// import { LiaCopyright } from "react-icons/lia";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="payment-strip">
                <img src={img1} alt="payment-strip" />
            </div>
            <div className="footer-content">
                <ul className="quick-links">
                    <li><h5>Quick links</h5></li>
                    <Link className='footer-link'>
                        <li className='gap'>
                            <p>Track my order</p>
                            <p>→</p>
                        </li>
                    </Link>
                    <Link className='footer-link'>
                        <li className='gap'>
                            <p>Help</p>
                            <p>→</p>
                        </li>
                    </Link>
                    <Link className='footer-link'>
                        <li className='gap'>
                            <p>Returns</p>
                            <p>→</p>
                        </li>
                    </Link>
                    <Link className='footer-link'>
                        <li className='gap'>
                            <p>Delivery Info</p>
                            <p>→</p>
                        </li>
                    </Link>
                    <li className='country'><h5>Country</h5></li>
                    <li>
                        <select name="" id="" className='euro'>
                            <option value="UK £">UK £</option>
                            <option value="EU €">EU €</option>
                            <option value="IE €">IE €</option>
                        </select>
                    </li>
                </ul>
                <ul className="help">
                    <li><h5>Help & Information</h5></li>
                    <li><Link className='footer-link'>Help</Link></li>
                    <li><Link className='footer-link'>Returns</Link></li>
                    <li><Link className='footer-link'>Delivery Info</Link></li>
                    <li><Link className='footer-link'>Size Guide</Link></li>
                    <li><Link className='footer-link'>Terms Of Use</Link></li>
                    <li><Link className='footer-link'>Terms & Conditions</Link></li>
                    <li><Link className='footer-link'>Privacy Policy</Link></li>
                    <li><Link className='footer-link'>About Cookies</Link></li>
                </ul>
                <ul className="about">
                    <li><h5>About Us & More</h5></li>
                    <li><Link className='footer-link'>Dorothy Perkins App</Link></li>
                    <li><Link className='footer-link'>Dorothy Perkins Unlimited Delivery</Link></li>
                    <li><Link className='footer-link'>Gift Cards</Link></li>
                    <li><Link className='footer-link'>Student Discount</Link></li>
                    <li><Link className='footer-link'>Key Worker Discount</Link></li>
                    <li><Link className='footer-link'>Environment & Social Responsibility</Link></li>
                    <li><Link className='footer-link'>Modern Slavery Statement</Link></li>
                    <li><Link className='footer-link'>Sustainability</Link></li>
                    <li><Link className='footer-link'>Klarna</Link></li>
                    <li><Link className='footer-link'>Clearpay</Link></li>
                    <li><Link className='footer-link'>Paypal</Link></li>
                    <li><Link className='footer-link'>Careers</Link></li>
                </ul>
                <ul className="subscribe">
                    <h4>EXTRA 15% OFF EVERYTHING!*</h4>
                    <li><h5>Subscribe to get exclusive offers and inside info.</h5></li>
                    <li className='email-us'>
                        <textarea name="" id="" cols="30" rows="2" placeholder='Enter your email'></textarea>
                        <button>SUBSCRIBE</button>
                    </li>
                    <li className='check'>
                        <input type="checkbox" name="" id="" />
                        <p>By signing up, you agree to <Link className='footer-link cookie'>Privacy and Cookie Policies</Link></p>
                    </li>
                    <li className='extra'>*Extra 15% discount is for new subscribers only. By submitting your details, you confirm you are age 16 or over, and agree to receive marketing communications from Debenhams.com and other brands operated by Debenhams by email. You can unsubscribe at any point.</li>
                    <div className='follow-us'>
                        <h4>Follow us</h4>
                        <div className="socials">
                            <Link><img src={img2} alt="" /></Link>
                            <Link><img src={img3} alt="" /></Link>
                            <Link><img src={img4} alt="" /></Link>
                        </div>
                        <div className="download">
                            <Link><img src={img5} alt="" /></Link>
                            <Link><img src={img6} alt="" /></Link>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="copyright">
                <p>COPYRIGHT 2023 THEBEECODES.COM. ALL RIGHTS RESERVED</p>
                <p className='terms'>
                    <Link className='footer-link'>Terms & Conditions</Link>
                    <Link className='footer-link'> Privacy Policies</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
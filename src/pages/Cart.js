import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { SlStar } from "react-icons/sl";
import { IoReloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img1 from "../components/images/bqq10572_pink_xl-cart.webp";
import img2 from "../components/images/paypal logo.svg";
import img6 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img7 from "../components/images/bqq12137_mid20wash_xl.jpg";
import img8 from "../components/images/bqq12152_white_xl.jpg";
import img9 from "../components/images/bqq12216_blue_xl.jpg";
import img10 from "../components/images/bqq12231_green_xl.jpg";
import pink from "../components/images/pink color.jpg";

function Cart() {
    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="cart-page">
                    <h4>Cart (1)</h4>
                    <div className="cart-container">
                        <div className="cart-content">
                            <div className="cart-con">
                                <div><img src={img1} alt="" /></div>
                                <div className="cart-desc">
                                    <p>40% OFF</p>
                                    <div>
                                        <h5><Link>Petite V Neck Broderie Sleeve Top</Link></h5>
                                        <p><Link>×</Link></p>
                                    </div>
                                    <p>Colour: <b>pink,</b> Size: <b>XS</b></p>
                                    <div>
                                        <p>QTY: <b>1</b></p>
                                        <p className="stock">In stock</p>
                                    </div>
                                    <div className="edit">
                                        <Link>Edit</Link>
                                        <p className="red">£12.00 <span className="cross">£20.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>FREE RETURNS FOR ALL DP UNLIMITED CUSTOMERS</p>
                            </div>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h5>Free Next Day Delivery</h5>
                                    <p>for 1 year with Dorothy Perkins Unlimited</p>
                                    <p>£9.99  <span>£6.99</span></p>
                                    <p><b>GET UNLIMITED</b> <span></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            <div>
                                <h4>Order Summary</h4>
                                <div>
                                    <div><p>Your cart</p></div>
                                    <div>
                                        <p>£55.00</p>
                                        <p><b>-£8.00</b></p>
                                        <p><b>-£10.50</b></p>
                                    </div>
                                </div>
                                <div>
                                    <div><p><b>Order total (excluding delivery)</b></p></div>
                                    <div><p><b>£36.50</b></p></div>
                                </div>
                                <p>*All taxes are included in product prices</p>
                                <button>CHECKOUT</button>
                                <p>OR, Checkout with</p>
                                <button><img src="" alt="" /></button>
                                <button><b>Klarna.</b> Express Checkout</button>
                            </div>
                            <div>
                                <p>Pay £12.17 in 3 installments with <b>Klarna.</b></p>
                                <p>Pay £9.13 in 4 installments with <b>clearpay</b></p>
                                <p>Pay in 3 interest-free payments on eligible purchases.</p>
                            </div>
                            <div className="promo-code">
                                <p><b>Have a promo code?</b></p>
                                <h6>Promo code</h6>
                                <div>
                                    <textarea name="" id="" cols="30" rows="3"></textarea>
                                    <button><b>APPLY</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="also-like">
                    <h4>You May Also Like</h4>
                    <div className="products collections">
                        <div className="product">
                            <div className="image">
                                <img src={img6} alt="" />
                                <p>UNLIMITED NEXT DAY DELIVERY</p>
                            </div>
                            <div className="des">
                                <p className="price">£6.99 (30% OFF) <span className="cross">£9.99</span></p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image">
                                <img src={img7} alt="" />
                                <p>Petite V Neck Broderie Sleeve Top</p>
                            </div>
                            <div className="des">
                                <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                                <p className="product-color"><img src={pink} alt="pink" /></p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image">
                                <img src={img8} alt="" />
                                <p>Petite V Neck Broderie Sleeve Top</p>
                            </div>
                            <div className="des">
                                <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                                <p className="product-color"><img src={pink} alt="pink" /></p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image">
                                <img src={img9} alt="" />
                                <p>Petite V Neck Broderie Sleeve Top</p>
                            </div>
                            <div className="des">
                                <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                                <p className="product-color"><img src={pink} alt="pink" /></p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image">
                                <img src={img10} alt="" />
                                <p>Petite V Neck Broderie Sleeve Top</p>
                            </div>
                            <div className="des">
                                <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                                <p className="product-color"><img src={pink} alt="pink" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Cart;
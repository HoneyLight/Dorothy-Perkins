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
import { useContext } from "react";
import { DPcontext } from "../contexts/DPcontext";

function Cart() {

    const contextData = useContext(DPcontext);
    const { cart, setCart } = contextData;

    const prdTotal = cart.map((item) => item.totalPrice).reduce((a, b) => {
        return a + b;
    }, 0);
 
    const removePrd = (id) => {
        // const cartdetails = cart.filter((item) => item._id !== id)
        // setCart(cartdetails);
    }

    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="cart-page">
                    <h4>Cart</h4>
                    {
                        cart.length ? (
                            <div >
                                <div className="cart-container">
                                    <div className="cart-content">
                                        {cart.map((data) => (
                                            <div className="cart-con">
                                                <div className="image"><img src={data.image} alt="" /></div>
                                                <div className="cart-desc">
                                                    <div className="cart-dis">
                                                        <p className="red">40% OFF</p>
                                                    </div>
                                                    <div>
                                                        <h5><Link className="cart-link">{data.name}</Link></h5>
                                                        <p><Link className="cart-link remove">X</Link></p>
                                                    </div>
                                                    <p>{data.description}</p>
                                                    <p className="cart-col">Colour: <b>pink,</b> Size: <b>XS</b></p>
                                                    <div className="prd-qty">
                                                        <p>QTY: <b>{data.quantity}</b></p>
                                                        <p className="stock">In stock</p>
                                                    </div>
                                                    <div className="edit">
                                                        <Link className="edit-link"><b>Edit</b></Link>
                                                        <Link className="del-link edit-link" onClick={() => removePrd(data._id)}><b>Remove</b></Link>
                                                        <p className="red">{data.price} <span className="cross">£20.00</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        }
                                        <div className="cart-content_rtn">
                                            <p><IoReloadOutline className="reload-icon" /></p>
                                            <p>FREE RETURNS FOR ALL DP UNLIMITED CUSTOMERS</p>
                                        </div>
                                        <div className="unlimited">
                                            <div>
                                                <p><SlStar className="star-icon" /></p>
                                            </div>
                                            <div>
                                                <div className="one-year">
                                                    <h4>Free Next Day Delivery</h4>
                                                    <p>for 1 year with Dorothy Perkins Unlimited</p>
                                                    <p className="red">£6.99  <span className="cross">£9.99</span></p>
                                                </div>
                                                <div className="get-unlimited">
                                                    <p><b>GET UNLIMITED</b> <span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-total">
                                        <div className="cart-summary">
                                            <h3>Order Summary</h3>
                                            <div className="your-cart">
                                                <div><p>Your cart</p></div>
                                                <div>
                                                    <p>£{prdTotal}</p>
                                                    {/* <p><b>-£8.00</b></p>
                                                    <p><b>-£10.50</b></p> */}
                                                </div>
                                            </div>
                                            <div className="order-total">
                                                <div><p><b>Order total (excluding delivery)</b></p></div>
                                                <div><p><b>£{prdTotal}</b></p></div>
                                            </div>
                                            <p className="taxes">*All taxes are included in product prices</p>
                                            <button className="checkout-btn">CHECKOUT</button>
                                            <p className="taxes">OR, Checkout with</p>
                                            <button className="paypal-btn"><img src={img2} alt="" /></button>
                                            <button className="klarna-btn"><b>Klarna.</b> Express Checkout</button>
                                        </div>
                                        <div className="pay-gateway">
                                            <p>Pay £12.17 in 3 installments with <b>Klarna.</b></p>
                                            <p>Pay £9.13 in 4 installments with <b>clearpay</b></p>
                                            <p>Pay in 3 interest-free payments on eligible purchases.</p>
                                        </div>
                                        <div className="promo-code">
                                            <p><b>Have a promo code?</b></p>
                                            <h5>Promo code</h5>
                                            <div className="promo-apply">
                                                <textarea name="" id="" cols="30" rows="2"></textarea>
                                                <button><b>APPLY</b></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className="no-item">No item in Cart</p>
                            </>
                        )
                    }
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
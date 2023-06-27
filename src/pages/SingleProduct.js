import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../components/images/womens-pink-petite-v-neck-broderie-sleeve-top.webp";
import img2 from "../components/images/pink-petite-v-neck-broderie-sleeve-top.webp";
import img3 from "../components/images/pink-petite-v-neck-broderie-sleeve-top (1).webp";
import img4 from "../components/images/DP_UNLIMITED_APP_PINK_6.jpg";
import img5 from "../components/images/pink color.jpg";
import img6 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img7 from "../components/images/bqq12137_mid20wash_xl.jpg";
import img8 from "../components/images/bqq12152_white_xl.jpg";
import img9 from "../components/images/bqq12216_blue_xl.jpg";
import img10 from "../components/images/bqq12231_green_xl.jpg";
import pink from "../components/images/pink color.jpg";

function SingleProduct() {
    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="single-product">
                    <div className="wears">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className="product-details">
                        <div className="free">
                            <p>FREE STANDARD DELIVERY WHEN YOU SPEND £50!</p>
                            <p><Link>Home</Link> / <Link>Clothing</Link> / <Link>Women's Tops</Link> / <Link>Blouses</Link> / Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="details">
                            <h4>Petite V Neck Broderie Sleeve Top</h4>
                            <p>£12.00 (40% OFF) <span>£20.00</span></p>
                            <img src={img5} alt="" />
                            <div className="size">
                                <button>XS</button>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                            </div>
                            <p><Link>Size guide</Link></p>
                        </div>
                        <div className="buy">
                            <button>SELECT SIZE</button>
                        </div>
                        <div className="save">
                            <Link><button>See similar</button></Link>
                            <Link><button>Save for later</button></Link>
                        </div>
                        <div className="dp-free">
                            <img src={img4} alt="" />
                        </div>
                        <div className="payment-plan">
                            <p>Pay £6.67 in 3 installments with <strong>Klarna.</strong> <Link>More info</Link></p>
                            <p>Pay £5.00 in 4 installments with <strong>clearpay</strong> <Link>More info</Link></p>
                            <p>Pay in 3 interest-free payments on eligible purchases. <strong>Paypal</strong> <Link>More info</Link></p>
                        </div>
                        <div className="styles">
                            <p>Cami or blouse? Shirt or bodysuit? Whatever you're after, our women's tops have you covered for every event in the social calendar. From casual fits to elevated styles for special occasions, we make it easy to nail the 'jeans and a nice top' look. Think puff sleeves, pretty prints, wrap silhouettes and so much more.</p>
                            <ul className="desc">
                                <li>Style: Petite V Neck Broderie Sleeve Top.</li>
                                <li>Ideal for: Daywear.</li>
                                <li>Design: Embroidered.</li>
                                <li>Model wears size UK 10 and is 5' 3" tall.</li>
                            </ul>
                            <p><strong>Make-up & Fragrance:</strong> Primer (Yves Saint Laurent, Touche Eclat Blur Primer 30ml), Foundation (Estée Lauder, Double Wear Stay in Place Foundation SPF10), Bronzer (Benefit, Hoola Matte Powder Bronzer), Blusher (Benefit, Wanderful World Blushes Starlaa Rosy Bronze Powder Blusher), Setting Spray (Urban Decay, All Nighter Setting Spray 118ml), Fragrance (Ghost The Fragrance Eau De Toilette).</p>
                            <p>100% cotton. Wash at 40, do not tumble dry.</p>
                            <p>SKU: #BQQ10572</p>
                        </div>
                        <div className="delivery">
                            <h4>Delivery & Returns</h4>
                            <p>FREE DELIVERY ON ALL ORDERS WHEN YOU SPEND £50</p>
                            <div className="return">
                                <p>Returns are free for DP Unlimited customers</p>
                                <p>Not happy? You have 28 days to return</p>
                                <p>Click <Link><strong>here</strong></Link> for our full returns policy.</p>
                            </div>
                        </div>
                        <div className="delivery-cost">
                            <div className="standard">
                                <div>
                                    <div>
                                        <p><strong>UK Standard Delivery</strong></p>
                                        <p>Up to 4 working days (Delivery days Monday to Saturday)</p>
                                    </div>
                                    <div>
                                        <p><strong>£3.99</strong></p>
                                    </div>
                                </div>
                                <div>
                                    <p><strong>FREE WHEN YOU SPEND £50!</strong></p>
                                </div>
                            </div>
                            <div className="next-day">
                                <div>
                                    <p><strong>UK Next Day Delivery</strong></p>
                                    <p>Order before 10pm Monday to Sunday to receive your order next day</p>
                                </div>
                                <div>
                                    <p><strong>£5.99</strong></p>
                                </div>
                            </div>
                        </div>
                        <p><Link>View all delivery options</Link></p>
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
export default SingleProduct;
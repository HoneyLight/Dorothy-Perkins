import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoReloadOutline, IoCalendarOutline } from "react-icons/io5";
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
import { useContext } from "react";
import DPProvider, { DPcontext } from "../contexts/DPcontext";

function SingleProduct() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    const contextData = useContext(DPcontext);
    const {cart, setCart} = contextData; 

    // const {size, setSize}  = props;

    const [title, setTitle] = useState("Select size");
    const [status, setStatus] = useState(true);

    

    function handleCart(addCart) {
        const existingCart = [...cart];
        const checkCart = existingCart.find((item) => item._id === addCart._id);
        if (checkCart) {
            alert('Item already in Cart')
            return;
        }
        const newKeys = {...addCart, quantity: 1, totalPrice: addCart.price};
        existingCart.push(newKeys);
        setCart(existingCart);

        localStorage.setItem("DPDebby", JSON.stringify(existingCart))
    }

    

    const getPrd = () => {
        fetch(`http://159.65.21.42:9000/product/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setProduct(data);
            console.log(data);
        })
    };

    useEffect(() => {
        getPrd();
    }, []);

    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="single-product">
                    <div className="wears">
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div className="hide"><img src={product.image} alt="" /></div>
                        <div className="hide"><img src={product.image} alt="" /></div>
                    </div>
                    <div className="product-des">
                        <div className="product-details">
                            <div className="free">
                                <p className="red"><b>FREE STANDARD DELIVERY WHEN YOU SPEND £50!</b></p>
                                <p className="brand"><Link className="brand-link">Home / </Link><Link className="brand-link">Clothing / </Link><Link className="brand-link">Women's Tops / </Link><Link className="brand-link">Blouses / </Link>{product.name}</p>
                            </div>
                            <div className="details">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p className="red">{product.price} (40% OFF) <span className="cross">£20.00</span></p>
                                <img className="prd-color" src={img5} alt="" />
                                <div className="size">
                                    <div><button>XS</button></div>
                                    <div><button>S</button></div>
                                    <div><button>M</button></div>
                                    <div><button>L</button></div>
                                </div>
                                <p><Link className="size-link">Size guide</Link></p>
                            </div>
                            <div className="buy">
                                <button onClick={() => handleCart(product)}>SELECT SIZE</button>
                            </div>
                            <div className="save">
                                <div>
                                <Link><button>See similar</button></Link>
                                </div>
                                <div>
                                <Link><button>Save for later</button></Link>
                                </div>
                            </div>
                            <div className="dp-free">
                                <img src={img4} alt="" />
                            </div>
                            <div className="payment-plan">
                                <p>Pay <b>£6.67</b> in 3 installments with <strong>Klarna.</strong> <Link className="plan-link">More info</Link></p>
                                <p>Pay <b>£5.00</b> in 4 installments with <strong>clearpay</strong> <Link className="plan-link">More info</Link></p>
                                <p>Pay in 3 interest-free payments on eligible purchases. <strong>Paypal</strong> <Link className="plan-link">More info</Link></p>
                            </div>
                            <div className="styles">
                                <p className="cami">Cami or blouse? Shirt or bodysuit? Whatever you're after, our women's tops have you covered for every event in the social calendar. From casual fits to elevated styles for special occasions, we make it easy to nail the 'jeans and a nice top' look. Think puff sleeves, pretty prints, wrap silhouettes and so much more.</p>
                                <ul className="desc">
                                    <li>Style: Petite V Neck Broderie Sleeve Top.</li>
                                    <li>Ideal for: Daywear.</li>
                                    <li>Design: Embroidered.</li>
                                    <li>Model wears size UK 10 and is 5' 3" tall.</li>
                                </ul>
                                <p><strong>Make-up & Fragrance:</strong> Primer (Yves Saint Laurent, Touche Eclat Blur Primer 30ml), Foundation (Estée Lauder, Double Wear Stay in Place Foundation SPF10), Bronzer (Benefit, Hoola Matte Powder Bronzer), Blusher (Benefit, Wanderful World Blushes Starlaa Rosy Bronze Powder Blusher), Setting Spray (Urban Decay, All Nighter Setting Spray 118ml), Fragrance (Ghost The Fragrance Eau De Toilette).</p>
                                <p className="wash">100% cotton. Wash at 40, do not tumble dry.</p>
                                <p className="code">SKU: #BQQ10572</p>
                            </div>
                            <div className="delivery">
                                <h4>Delivery & Returns</h4>
                                <p className="free-delivery hide">FREE DELIVERY ON ALL ORDERS WHEN YOU SPEND £50</p>
                                <div className="return hide">
                                    <p>Returns are free for DP Unlimited customers</p>
                                    <p>Not happy? You have 28 days to return</p>
                                    <p>Click <Link className="here"><strong>here</strong></Link> for our full returns policy.</p>
                                </div>
                            </div>
                            <div className="delivery-cost hide">
                                <div className="standard">
                                    <div className="std-con">
                                        <div>
                                            <p><strong>UK Standard Delivery</strong></p>
                                            <p>Up to 4 working days (Delivery days Monday to Saturday)</p>
                                        </div>
                                        <div>
                                            <p><strong>£3.99</strong></p>
                                        </div>
                                    </div>
                                    <div className="spend">
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
                            <p className="view-all hide"><Link className="view-link">View all delivery options</Link></p>
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
export default SingleProduct;
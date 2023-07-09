import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../components/images/bqq10572_pink_xl.jpg";
import img2 from "../components/images/bqq12331_pink_xl.jpg";
import img3 from "../components/images/DP_WK22_WEB_Nav_Imagery-SHOES.jpg";
import img4 from "../components/images/bqq09489_blush_xl.jpg";
import img5 from "../components/images/bqq00998_ecru_xl.jpg";
import img6 from "../components/images/bqq09489_green_xl.jpg";
import img7 from "../components/images/bqq09489_taupe_xl.jpg";
import img8 from "../components/images/bqq09773_blush_xl.jpg";
import img9 from "../components/images/bqq09774_tan_xl.jpg";
import img10 from "../components/images/bqq09777_black_xl.jpg";
import img11 from "../components/images/bqq09823_white_xl.jpg";
import img12 from "../components/images/bqq09859_blush_xl.jpg";
import img13 from "../components/images/bqq09932_multi_xl.jpg";
import img14 from "../components/images/bqq09937_multi_xl.jpg";
import img15 from "../components/images/bqq10073_blush_xl.jpg";
import img16 from "../components/images/bqq10076_rose20gold_xl.jpg";
import img17 from "../components/images/bqq10076_white_xl.jpg";
import img18 from "../components/images/bqq10077_blush_xl.jpg";
import img19 from "../components/images/bqq10077_natural_xl.jpg";
import img20 from "../components/images/bqq10077_navy_xl.jpg";
import img21 from "../components/images/bqq10093_black_xl.jpg";
import img22 from "../components/images/bqq10094_blush_xl.jpg";
import img23 from "../components/images/bqq10098_black_xl.jpg";
import img24 from "../components/images/bqq10098_rose20gold_xl.jpg";
import img25 from "../components/images/bqq10098_tan_xl.jpg";
import img26 from "../components/images/bqq10295_blue_xl.jpg";
import img27 from "../components/images/bqq10429_ivory_xl.jpg";
import img28 from "../components/images/bqq10454_mono_xl.jpg";
import img29 from "../components/images/bqq10546_navy_xl.jpg";
import img30 from "../components/images/bqq10645_rose20gold_xl.jpg";
import img31 from "../components/images/bqq10697_blue_xl.jpg";
import img32 from "../components/images/bqq10792_green_xl.jpg";
import img33 from "../components/images/bqq10949_black_xl.jpg";
import img34 from "../components/images/bqq10949_white_xl.jpg";
import img35 from "../components/images/bqq10982_aqua_xl.jpg";
import img36 from "../components/images/bqq10989_rust_xl.jpg";
import img37 from "../components/images/bqq11036_pink_xl.jpg";
import img38 from "../components/images/bqq11077_white_xl.jpg";
import img39 from "../components/images/bqq11365_white_xl.jpg";
import img40 from "../components/images/bqq11495_blush_xl.jpg";
import img41 from "../components/images/bqq11504_black_xl.jpg";
import img42 from "../components/images/bqq11539_silver_xl.jpg";
import img43 from "../components/images/bqq11663_ecru_xl.jpg";
import img44 from "../components/images/bqq11663_mid20wash_xl.jpg";
import img45 from "../components/images/bqq11707_blue_xl.jpg";
import img46 from "../components/images/bqq11754_hot20pink_xl.jpg";
import img47 from "../components/images/bqq11770_blue_xl.jpg";
import img48 from "../components/images/bqq11870_green_xl.jpg";
import img49 from "../components/images/bqq12047_white_xl.jpg";
import img50 from "../components/images/bqq12129_black_xl.jpg";
import img51 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img52 from "../components/images/bqq12137_mid20wash_xl.jpg";
import img53 from "../components/images/bqq12152_white_xl.jpg";
import img54 from "../components/images/bqq12216_blue_xl.jpg";
import img55 from "../components/images/bqq12231_green_xl.jpg";
import img56 from "../components/images//bqq12298_blue_xl.jpg";
import img57 from "../components/images/bqq12331_pink_xl.jpg";
import img58 from "../components/images/bqq12343_grey_xl.jpg";
import img59 from "../components/images/bqq12371_green_xl.jpg";
import img60 from "../components/images/bqq12396_black_xl.jpg";
import img61 from "../components/images/bqq12706_blush_xl.jpg";
import img62 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img63 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img64 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img65 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img66 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img67 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img68 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img69 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img70 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img71 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img72 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img73 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img74 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img75 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img76 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img77 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img78 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img79 from "../components/images/DPDELIVERYPASS__xl.jpg";
import img80 from "../components/images/DPDELIVERYPASS__xl.jpg";
import pink from "../components/images/pink color.jpg";

function Shop() {

    const [product, setProduct] = useState([]);

    const getProduct = (category) => {
        fetch("http://159.65.21.42:9000/products")
            .then((resp) => resp.json())
            .then((output) => {
                const getCategory = output.filter((result) => result.category === category);
                setProduct(getCategory);
                console.log(getCategory);
            })
            .catch((err) => console.log((err.message)))
    };

    useEffect(() => {
        getProduct("DPDebby");
    }, []);

    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="shop-all">
                    <div>
                        <p className="shop-all-pay"><Link className="shop-all-link">Home / </Link><Link className="shop-all-link">Promotion/ </Link>PAYDAY 25% OFF ALMOST EVERYTHING</p>
                    </div>
                    <div className="payday">
                        <h3>PAYDAY 25% OFF ALMOST EVERYTHING</h3>
                    </div>
                </div>
                <div className="filter">
                    <div><p>1200 products</p></div>
                    <div className="shop-view">
                            {/* <p><b>View: </b></p>
                            <div><button className="active">5</button></div>
                            <div><button>4</button></div>
                            <div><button>3</button></div> */}
                            <div>
                                <select name="" id="">
                                    <option value="Best March">Best March</option>
                                    <option value="Newest In">Newest In</option>
                                    <option value="Newest In">Relevance</option>
                                    <option value="Price (Low to High)">Price (Low to High)</option>
                                    <option value="Price (High to Low)">Price (High to Low)</option>
                                </select>
                            </div>
                        </div>
                </div>
                <div className="shop-container">
                    <div className="shop-varieties">
                        <div className="accordion-container">
                            <div className="accordion-tab">
                                <input type="checkbox" name="toggle" id="accordion-1" />
                                <label htmlFor="accordion-1">Category</label>
                                <div className="accordion-content block">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-tab2">
                                <input type="checkbox" name="toggle" id="accordion-2" />
                                <label htmlFor="accordion-2">Brand</label>
                                <div className="accordion-content2">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-tab3">
                                <input type="checkbox" name="toggle" id="accordion-3" />
                                <label htmlFor="accordion-3">Occasion</label>
                                <div className="accordion-content3 block">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="accordion-tab4">
                                <input type="checkbox" name="toggle" id="accordion-4" />
                                <label htmlFor="accordion-4">Size</label>
                                <div className="accordion-content4 block">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="accordion-tab5">
                                <input type="checkbox" name="toggle" id="accordion-5" />
                                <label htmlFor="accordion-5">Shop by body fit</label>
                                <div className="accordion-content5 block">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="accordion-tab6">
                                <input type="checkbox" name="toggle" id="accordion-6" />
                                <label htmlFor="accordion-6">Colour</label>
                                <div className="accordion-content6">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="accordion-tab7">
                                <input type="checkbox" name="toggle" id="accordion-7" />
                                <label htmlFor="accordion-7">Style</label>
                                <div className="accordion-content7">
                                    <ul>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" className="bigbox" />
                                            </Link>
                                            <Link>
                                                Accesories
                                            </Link>
                                        </li>
                                        <li className="aaa">
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>
                                                Beach Wear
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Boots</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Denim</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Coats & Jackets</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Joggers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers and Cardigans</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpers</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Jumpsuits</Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <input type="checkbox" name="" id="big-box" />
                                            </Link>
                                            <Link>Shorts</Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        {
                            product.map((data, i) => (
                                <div className="product" >
                                    <div className="image">
                                        <Link to={`/shop/${data.category}/${data._id}`} className="link" key={i}>
                                            <img src={data.image} alt="Product" />
                                            <p>{data.name}</p>
                                        </Link>
                                    </div>
                                    <div className="des">
                                        <p>{data.description}</p>
                                        <p className="price">£{data.price} (40% OFF) <span className="cross">£20.00</span></p>
                                        <p className="product-color"><img src={pink} alt="pink" /></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="more-products">
                    <p>Showing <b>{product.length}</b> of <b>2,066</b> products</p>
                    <Link>
                        <button>LOAD MORE</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Shop;
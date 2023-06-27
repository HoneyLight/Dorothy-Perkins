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
    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="up">
                    <div></div>
                    <div></div>
                </div>
                <div className="products">
                    <div className="product">
                        <div className="image">
                            <Link className="link">
                                <img src={img1} alt="" />
                                <p>Petite V Neck Broderie Sleeve Top</p>
                            </Link>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img2} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img3} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img4} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img5} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img6} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
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
                    <div className="product">
                        <div className="image">
                            <img src={img11} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img12} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img13} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img14} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img15} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img16} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img17} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img18} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img19} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img20} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img21} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img22} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img23} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img24} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img25} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img26} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img27} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img28} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img29} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img30} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img31} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img32} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img33} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img34} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img35} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img36} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img37} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img38} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img39} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img40} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img41} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img42} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img43} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img44} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img45} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img46} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img47} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img48} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img49} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img50} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img51} alt="" />
                            <p>UNLIMITED NEXT DAY DELIVERY</p>
                        </div>
                        <div className="des">
                            <p className="price">£6.99 (30% OFF) <span className="cross">£9.99</span></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img52} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img53} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img54} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img55} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img56} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img57} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img58} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img59} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img60} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img61} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img62} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img63} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img64} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img65} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img66} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img67} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img68} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img69} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img70} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img71} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img72} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img73} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img74} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img75} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img76} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img77} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img78} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img79} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <img src={img80} alt="" />
                            <p>Petite V Neck Broderie Sleeve Top</p>
                        </div>
                        <div className="des">
                            <p className="price">£12.00 (40% OFF) <span className="cross">£20.00</span></p>
                            <p className="product-color"><img src={pink} alt="pink" /></p>
                        </div>
                    </div>
                </div>
                <div className="more-products">
                    <Link>
                        <button>VIEW MORE</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Shop;
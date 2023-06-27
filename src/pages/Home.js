import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import img1 from "../components/images/DP_HOMEPAGE_CATS_D_WK24.jpg";
import img2 from "../components/images/DP_WEDDING_GUEST_DESKTOP.jpg";

function Home() {
    return (
        <div>
            <Navigation />
            <div className="pages">
            <Banner />
                <div className="clothings">
                    <Link>
                        <img src={img1} alt="clothing" />
                    </Link>
                </div>
                <div className="wedding-guest">
                    <Link>
                        <img src={img2} alt="wedding-guest" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;
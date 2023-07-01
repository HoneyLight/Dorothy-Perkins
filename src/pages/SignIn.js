import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import img from "../components/images/DP_Track_my_order_1.jpg";
import { Link } from "react-router-dom";


function SignIn() {
    return(
        <div>
        <Navigation />
        <div className="pages">
            <div className="Dp-signup">
                <div className="sign-left">
                </div>
                <div className="sign-right">
                    <div className="sign-form log-form">
                        <form>
                            <h3>Log In</h3>
                            <div>
                                <label>Email address</label>
                                <input type="email" className="info" />
                            </div>
                            
                            <div>
                                <label>Password</label>
                                <div className="show">
                                    <input type="text" />
                                    <p>
                                        <u>Show</u>
                                    </p>
                                </div>
                            </div>
                            <div className="dp-check">
                                <input type="checkbox" />
                                <p>Remember me </p>
                            </div>
                            <button>LOG IN </button>
                             
                            <div className="create-acc">
                                <p className="am-new">I'm new to Dorothy Perkins.</p>
                                <p>Join the gang to get all the member benefits.
                                </p>
                            </div>
                            <Link to="/signup">
                            <button>CREATE ACCOUNT </button>
                            </Link>
                        </form>
                    </div>
                    <div className="sign-img log-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}
export default SignIn;
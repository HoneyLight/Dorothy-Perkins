import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import img from "../components/images/DP_Track_my_order_1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const Navigate = useNavigate();


    const Login = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErr(true);
            return;
        }
        let users = {
            email: email,
            password: password,
        }

        fetch("http://159.65.21.42:9000/users")
            .then((resp) => resp.json())
            .then((result) => {
                const registeredUser = result.find((resp) => resp.email === email && resp.password === password)
                if (registeredUser) {                   
                    alert("Login successful");
                    Navigate("/")
                }
                else {
                    alert("Email or Password does not exist");
                }
                console.log(registeredUser);
            })
            .catch((err) => console.log((err.message)));
    }


    return(
        <div>
        <Navigation />
        <div className="pages">
            <div className="Dp-signup">
                <div className="sign-left">
                </div>
                <div className="sign-right">
                    <div className="sign-form log-form">
                        <form onSubmit={Login}>
                            <h3>Log In</h3>
                            <div>
                                <label>Email address</label>
                                <input type="email" className="info" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                {err && email == "" ? <span>Email required</span> : null}
                            </div>
                            
                            <div>
                                <label>Password</label>
                                <div className="">
                                    <input type="text" className="info" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    {/* <p>
                                        <u>Show</u>
                                    </p> */}
                                    {err & password == "" ? <span>Password required</span> : null}
                                </div>
                            </div>
                            <div className="dp-check">
                                <input type="checkbox" />
                                <p>Remember me </p>
                            </div>
                            <button type="submit">LOG IN </button>
                             
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
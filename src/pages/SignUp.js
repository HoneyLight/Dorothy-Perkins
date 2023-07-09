import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import img from "../components/images/DP_Track_my_order_1.jpg";
import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [err, setErr] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || password === "" || conpassword === "" || gender === "") {
            setErr(true);
            return;
        }
        let user = {
            name: name,
            phone: phone,
            email: email,
            password: password,
        };

        fetch("http://159.65.21.42:9000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                alert("Registered successfully")
                console.log(data);
            })
            .catch((err) => console.log(err));
    }


    return (
        <div>
            <Navigation />
            <div className="pages">
                <div className="Dp-signup">
                    <div className="sign-left">
                    </div>
                    <div className="sign-right">
                        <div className="sign-form">
                            <form onSubmit={handleCreate}>
                                <h3>Create Account</h3>
                                <h6>
                                    Don't have an account? No worries, creating one is quick and
                                    easy to do!
                                </h6>
                                <div>
                                    <label>Email address</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="info" />
                                    {err && email === "" ? <span>Email Required</span> : null}
                                </div>
                                <div className="dp-check">
                                    <input type="checkbox" />
                                    <p>I confirm the email address is correct </p>
                                </div>
                                <div>
                                    <label>Phone Number</label>
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="info" />
                                    {err && phone === "" ? <span>Phone Required</span> : null}
                                </div>
                                <div>
                                    <label>Password</label>
                                    <div className="">
                                        <input type="text" className="info" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {/* <p>
                                            <u>Show</u>
                                        </p> */}
                                        {err && password === "" ? <span>Password Required</span> : null}
                                    </div>
                                </div>
                                <div>
                                    <label>Confirm</label>
                                    <div className="">
                                        <input type="text" className="info" value={conpassword} onChange={(e) => setConpassword(e.target.value)}/>
                                        {/* <p>
                                            <u>Show</u>
                                        </p> */}
                                    {err && conpassword === "" ? <span>Confirm Password Required</span> : null}
                                    </div>
                                </div>

                                <div>
                                    <label>Name </label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="info" />
                                    {err && name === "" ? <span>Name Required</span> : null}
                                </div>
                                <div>
                                    <label>Date of birth </label>
                                    <div className="select">
                                        <select name="" id="">
                                            <option value="">Day</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                        <select name="" id="">
                                            <option value="">Month</option>
                                            <option value="">January</option>
                                            <option value="">February</option>
                                        </select>
                                        <select name="" id="">
                                            <option value="">Year</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                        </select>
                                    </div>
                                    <p>You need to be 16 or over to have account with us</p>
                                </div>
                                <div className="select2">
                                    <label>Gender (optional)</label>
                                    <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option value="">Please select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {err && gender === "" ? <span>Gender Required</span> : null}
                                </div>
                                <div className="check2">
                                    <p>I’d like to receive exclusive discounts and news from Dorothy Perkins by:</p>
                                    <div className="dp-check">
                                        <input type="checkbox" />
                                        <p>Email</p>
                                    </div>
                                    <div className="dp-check">
                                        <input type="checkbox" />
                                        <p> Post</p>
                                    </div >
                                    <div className="dp-check">
                                        <input type="checkbox" />
                                        <p>SMS</p>
                                    </div>
                                    <div className="dp-check">
                                        <input type="checkbox" />
                                        <p>Email, post and sms* from carefully selected thrid parties</p>
                                    </div>
                                </div>
                                <div className="agreement">
                                    <p>*By checking the SMS box, you are agreeing to receive texts from or on behalf of Dorothy Perkins, our family of companies, or one of its third-party associates, to any telephone number you provide. These texts could be sent using an automated telephone system. Agreement is not a requirement of purchase and you are free to opt-out at any time.</p>
                                    <p>By continuing you agree to our Terms & Conditions. See our Privacy Notice
                                    </p>
                                </div>
                                <button>CREATE ACCOUNT </button>
                            </form>
                        </div>
                        <div className="sign-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default SignUp;

import Btn from './Btn';
import { Link } from 'react-router-dom';
import img1 from "./images/DP_DT_EXTRA10_BANNER.jpg";
import img2 from "./images/hp_2.jpg";
import img3 from "./images/hp70.jpg";

function Banner() {
    return (
        <div className="banner">
            <div className="discount-banner">
                <img src={img1} alt="discount" />
            </div>
            <div className="main-banner">
                {/* <Link to="./shop">
                    <img src={img2} alt="main" />
                </Link> */}
            </div>
            <div className="sale-banner">
                {/* <Link>
                    <img src={img3} alt="" />                
                </Link> */}
            </div>
        </div>
    )
}

export default Banner;

{/* <h1>Welcome to Chop & Grill</h1>
                <p>The hub of Delicious Delicacies</p>
                {/* <img src={img1} alt="" className='images'/> */}
// <div className="banner-btns">
//     <Btn title= "Order now" bgColor="none" color="white" border="2px solid white" />
//     <Btn title= "View more" bgColor="white" color="black" />
{/* <button className='banner-btn1'>Order now</button>
                    <button className='banner-btn2'>View more</button> */}
{/* <button onClick="" style={{color: "white"}}>increase cart practice</button> */ }
                    // </div> */}
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaCcAmex } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-first-half">
        <div className="subscribe-container">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Signup for updates from metta muse</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-container">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <div className="country-container">
            <img
              src="https://s.yimg.com/fz/api/res/1.2/xhGE6mVEGIAdzoBXBQRjFQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTQxOA--/https://s.yimg.com/zb/imgv1/a0dfc126-c352-3366-b825-7aec54857f6f/t_500x300"
              alt="usa"
            />
            <span>USA</span>
          </div>
          <p className="transaction">
            Transactions will be completed in euros and a currency refference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-second-half">
        <div className="mettamuse-container">
          <h3>metta muse</h3>
          <p>About us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="quick-links-container">
          <h3>QUICK LINKS</h3>
          <p>Order & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="followus-container">
          <h3>FOLLOW US</h3>
          <div>
            <BsInstagram className="insta" />
            <RiLinkedinBoxLine className="linkedin" />
          </div>
          <h3 className="sub-heading">metta muse ACCEPTS</h3>
          <div className="payment-container">
            <FaGooglePay className="gpay" />
            <FaCcMastercard className="master" />
            <FaPaypal className="paypal" />
            <FaCcAmex className="amex" />
            <FaApplePay className="applepay" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <BsFlower1 className="logo" />
        </Link>
        <h2 className="navbar-heading">Logo</h2>
        <div className="social-links">
          <BsSearch className="navbar-link" />
          <BsHeart className="navbar-link" />
          <BsHandbag className="navbar-link" />
          <BsPerson className="navbar-link" />
          <div className="lang">
            <span>ENG</span> <BsChevronDown className="dropdown" />
          </div>
        </div>
      </nav>
      <div className="btn-container">
        <Link to="/">
          <ButtonComponent name="shop" />
        </Link>
        <Link to="/skills">
          <ButtonComponent name="skills" />
        </Link>
        <Link to="/stories">
          <ButtonComponent name="stories" />
        </Link>
        <Link to="/about">
          <ButtonComponent name="about" />
        </Link>
        <Link to="/contact">
          <ButtonComponent name="contactus" />
        </Link>
      </div>
      <hr />
    </>
  );
};
export default Navbar;

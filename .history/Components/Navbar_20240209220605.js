"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { VscAccount } from "react-icons/vsc";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  // const [navActive, setNavActive] = useState();
  // const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      {/* <nav className={`nav`}>
        
          <a>
            
          </a>
        
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav> */}
      <div className={styles.navbar}>
        <h1 className="ms-3">
          <img
            class="_7_i_XA"
            crossorigin="anonymous"
            src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PQTVGby9NQUZybXhPQTVGby8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAGM9TG8Xt8h4r01OuvUqLICbf7j3TXbXueCh0Vr-mvex&amp;exp=1707333544&amp;x-canva-quality=thumbnail&amp;csig=AAAAAAAAAAAAAAAAAAAAAFYg2FfDZgTfpqe_NulZBTop9JF5U4G8GUYA5SfOuegO"
            draggable="false"
            height={65}
          ></img>
          
        </h1>

        <AccountCircleIcon style={{color:"#fffff"}} />
      </div>
    </header>
  );
};

export default Navbar;

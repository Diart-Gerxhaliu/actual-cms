import React, { useEffect, useState } from "react";
import Image from "../atoms/Image";
import Navcomps from "../../json/Menu.json";
import Logo from "../../json/Logo.json";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import "./Menu.css";

function Menu() {
  const [lG, setLG] = useState([]);
  const [lN, setLN] = useState([]);
  const [menuStyle, setMenuStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const style = {
      height: "90px",
      padding: "15px 50px",
      justifyContent: "space-between",
    };

    const styleLS = localStorage.getItem("MenuStyle");
    const logo = localStorage.getItem("Logo");
    const comps = localStorage.getItem("Navbar");

    if (styleLS == null) {
      localStorage.setItem("MenuStyle", JSON.stringify(style));
    } else {
      setMenuStyle(JSON.parse(styleLS));
    }

    if (logo == null) {
      localStorage.setItem("Logo", JSON.stringify(Logo));
    } else {
      setLG(JSON.parse(logo));
    }

    if (comps == null) {
      localStorage.setItem("Navbar", JSON.stringify(Navcomps));
    } else {
      setLN(JSON.parse(comps));
    }
  }, []);

  return (
    <div className="menu" style={menuStyle}>
      {lG.map((gal, idx) => (
        <Image key={idx} src={gal.image} alt="logo" />
      ))}

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon color="white" size={28} />
        ) : (
          <MenuIcon color="white" size={28} />
        )}
      </div>

      <ul className={`navbar ${isOpen ? "show" : ""}`}>
        {lN.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.child}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

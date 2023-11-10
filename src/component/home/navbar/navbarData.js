import React from "react";
import { Link } from "react-router-dom";

export const NavbarData = [
  { title: "HOME", link: "/" },
  {
    title: "SERVICES",
    link: <Link className="link" to="/services"></Link>,
  },
  {
    title: "ABOUT",
    link: <Link className="link" to="/about"></Link>,
  },
  {
    title: "CONTACT",
    link: <Link className="link" to="/contact"></Link>,
  },
];

export default NavbarData;

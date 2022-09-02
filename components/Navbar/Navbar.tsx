/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={`${s.container}`}>
      <nav className={`${s.navBar}`}>
        <ul>
          <li>about</li>
          <li>whitepaper</li>
          <li>team</li>
          <li className={`${s.logo}`}>
            <Image src="/images/async_logo.png" width={97} height={54} />
          </li>
          <li>contact us</li>
          <li>get $async</li>
          <li>open app</li>
          {/* <button className={`${s.walletbtn}`}>Connect wallet</button> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

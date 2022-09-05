import React from "react";
import s from "./Nav.module.scss";
import Image from "next/image";
const Nav = () => {
  return (
    <div className={`${s.container}`}>
      <nav className={`${s.nav}`}>
        <div className={`${s.logo}`}>
          <Image
            src="/images/async_logo.png"
            width={92.18}
            height={50}
            alt="logo"
          />
        </div>
        <div className={`${s.searchBox}`}>
          <input type={"text"} name={"text"} placeholder={"Search"} />
        </div>
        <div className={`${s.messages}`}>
          <Image
            src="/images/messages.png"
            alt="messages"
            height={56}
            width={56}
          />
        </div>
        <div className={`${s.messages}`}>
          <Image src="/images/bell.png" alt="messages" height={56} width={56} />
        </div>
        <div className={`${s.messages}`}>
          <Image src="/images/user.png" alt="messages" height={56} width={56} />
        </div>
        <div className={`${s.createTask}`}>+CREATE TASK</div>
        <div className={`${s.profile}`}>
          <div className={`${s.circle}`}></div>
          0xRRT45..34
        </div>
      </nav>
    </div>
  );
};

export default Nav;

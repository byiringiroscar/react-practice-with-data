import React from 'react';

const Header = () => (
  <header>
    <ul className="right-nav">
      <li><a className="logo" href="/">VUDU</a></li>
      <li><a href="/">Movies</a></li>
      <li><a href="/">TV</a></li>
      <li><a href="/">MyVudu</a></li>
      <li><a href="/">Free</a></li>
    </ul>
    <ul className="left-nav">
      <li><a href="/">Redeem</a></li>
      <li><a href="/">Hi, Oscar</a></li>
    </ul>
  </header>
);

export default Header;

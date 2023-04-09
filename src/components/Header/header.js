import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="right-nav">
      <li><Link className="logo" to="/">VUDU</Link></li>
      <li><Link to="/">Movies</Link></li>
      <li><Link to="/">TV</Link></li>
      <li><Link to="/">MyVudu</Link></li>
      <li><Link to="/">Free</Link></li>
    </ul>
    <ul className="left-nav">
      <li><Link to="/">Redeem</Link></li>
      <li><Link to="/">Hi, Oscar</Link></li>
    </ul>
  </header>
);

export default Header;

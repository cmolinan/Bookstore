import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header className={style.header_container}>
      <h3>BookStore CMS</h3>
      <nav className={style.navlist}>
        <li className={style.navlink}><NavLink to="/" exact="true">BOOKS</NavLink></li>
        <li className={style.navlink_l}><NavLink to="/categories" exact="true">CATEGORIES</NavLink></li>
      </nav>
    </header>
  );
}

export default Header;

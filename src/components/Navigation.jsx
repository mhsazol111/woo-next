import NavLink from './NavLink';

import headerStyle from '../assets/css/Header.module.scss';

const Navigation = () => {
  return (
    <ul className="menu flex">
      <li>
        <NavLink activeClassName={headerStyle.active} href="/">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur`}>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/about">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur`}>About</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/products">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur`}>Products</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/contact">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur`}>Contact</a>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

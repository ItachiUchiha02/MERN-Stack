import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
<<<<<<< HEAD
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <React.Fragment>
    <SideDrawer>
      <bnav className="main-navigation__drawer-nav">
        <NavLinks />
      </bnav>
    </SideDrawer>
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
    </React.Fragment> 
  );
};

export default MainNavigation;
=======
import './MainHeader.css';

const MainNavigation = props => {
    return <MainHeader>
        <button className="main-navigation__menu0">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link>
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
};

export default MainNavigation;
>>>>>>> 3370bed89f021654bfa34f967a4a151eb4263246

import s from './MainNavigation.module.scss';
import { useState } from 'react';
import Media from 'react-media';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Burger from '../Burger/Burger';
import BtnToggleTheme from '../../BtnToggleTheme/BtnToggleTheme';
import Logo from '../../Logo/Logo';
import LogoImg1 from "../../../assets/logo2.png"

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Logo className={s.desktop} />
      <img className={s.Logo_GH} src={LogoImg1} alt="about" />

      <nav className={s.desktop}>
        <NavLinks />
        <BtnToggleTheme />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />

            <Logo className={s.mobile} />

            <BtnToggleTheme className={s.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;

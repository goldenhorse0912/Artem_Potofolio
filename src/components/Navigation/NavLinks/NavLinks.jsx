import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <a href={routes.HOME} >
          {/* <AiOutlineHome /> */}
          Home
        </a>
      </li>

      <li>
        <a href={routes.ABOUT}>
          {/* <AiOutlineUser /> */}
          About
        </a>
      </li>

      <li>
        <a href={routes.PROJECTS}>
          {/* <AiOutlineFundProjectionScreen /> */}
          Projects
        </a>
      </li>

      <li>
        <a href={routes.RESUME}>
          {/* <CgFileDocument /> */}
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;

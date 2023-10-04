import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { ROUTES } from '../../../constants';

import {
  container,
  routeActive,
  routeItem,
  routeLink,
  routeList,
} from './navigationBar.css';

const NavigationBar = () => {
  return (
    <div className={container}>
      <nav>
        <ul className={routeList}>
          {ROUTES.map((route) => (
            <li key={route.path} className={routeItem}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  cx(routeLink, { [routeActive]: isActive })
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

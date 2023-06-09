import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => (
    <nav>
    <NavLink className={css.link} to="/">
    Home
    </NavLink>
    <NavLink className={css.link} to="/users">
    Tweets
    </NavLink>
    </nav>
  );

import { getStatusFilter } from "../../redux/selectors";
import { getUsers } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { statusFilters } from "../../redux/constans";
import { Button } from "../Button/Button";
import { followUser } from "../../redux/users/operations";
import css from "./CardUsers.module.css";
import logo from "../../images/Logo.png";
import fone from "../../images/fone.png";

export const CardUser = () => {
    const users = useSelector(getUsers);
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);
    const getVisibleUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => !user.isFollow);
    case statusFilters.followings:
      return users.filter(user => user.isFollow);
    default:
      return users;
  }
};

    const visibleUsers = getVisibleUsers(users, filter);
    return (
        visibleUsers.map(item => {
            const handleFollow = (e) => {
                dispatch(followUser(item));
            }
            return (
                <li key={item.id} className={css.item}>
                <img src={logo} alt="logo" className={css.logo}/>
                <img src={fone} alt="fone" className={css.fone}/>
                <span className={css.circle}></span>
            <span className={css.line1}></span>
                <img src={item.avatar} alt={item.user} className={css.avatar}/>
            <span className={css.line2}></span>
            <p className={css.tweets}>{item.tweets} TWEETS</p>
            <p className={css.followers}>{(item.followers/1000).toFixed(3).toString().replace(".", ",")} FOLLOWERS</p>
            <Button selected={item.isFollow}
                type="button" 
                onClick={handleFollow}>{item.isFollow ? "FOLLOWINGS" : "FOLLOW"}</Button>
            </li>
            )
            
        })
    )
}
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
import { onFilter } from "../../redux/users/slice";
import css from "./FilterMenu.module.css";


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = filter => dispatch(onFilter(filter));

    return (
        <ul className={css.list}>
            <li className={css.item}><Button 
            selected ={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}>All</Button></li>
            <li className={css.item}><Button 
            selected ={filter === statusFilters.follow}
            onClick={() => handleFilterChange(statusFilters.follow)}>Follow</Button></li>
            <li className={css.item}><Button 
            selected ={filter === statusFilters.followings}
            onClick={() => handleFilterChange(statusFilters.followings)}>Followings</Button></li>
        </ul>
    )
}
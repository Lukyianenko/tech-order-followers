// import PropTypes from 'prop-types';
import { Button } from "../Button/Button";
import { loadMoreFetch } from "../../redux/users/operations";
import { useDispatch } from "react-redux/es/exports";
import { CardUser } from "./CardUser";
import css from "./Users.module.css";


export const Tweets = () => {
    const dispatch = useDispatch(); 
    const handleLoadMore = () => {
        dispatch(loadMoreFetch());
    }
    return (
        <>
        <section className={css.sectionTweets}>
        <ul className={css.list}>
            <CardUser />
        </ul>

        <Button type="button" onClick={handleLoadMore}>Load More</Button>
        </section>
        </>
    )
    
}

// ListContacts.propTyoes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })).isRequired,
//     onDelete: PropTypes.func,
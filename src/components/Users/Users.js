import PropTypes from 'prop-types';
// import { Filter } from "./Filter";
import { CardUser } from "./CardUser";
import css from "./Users.module.css";


export const Tweets = () => {
    return (
        <>
        {/* <section>
            <Filter />
        </section> */}
        <section className={css.sectionTweets}>
        <ul className={css.list}>
            <CardUser />
        </ul>
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
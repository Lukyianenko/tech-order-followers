import PropTypes from 'prop-types';
// import { TitleContact, List, ContList, ButtonList, ItemList } from './BookContacts.styled';
import { getUsers } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux/es/exports";

export const Tweets = () => {
    const users = useSelector(getUsers);
    // const dispatch = useDispatch();
    console.log(users);

    // const filtr = useSelector(state => state.contact.filter);
    // const normalizeFiltr = filtr.toLowerCase();
    // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFiltr));

    // const onDelete = (id) => dispatch(deleteContact(id));

    // return (
    // <ContList>
    //     <TitleContact>Contacts</TitleContact>
    //     <List>
    //     {visibleContacts.map(({ id, name, phone }) => (<ItemList key={id}>{name}: {phone} 
    //     <ButtonList type="button" onClick={() => onDelete(id)}>Delete</ButtonList>
    //     </ItemList>))}
    //     </List>
    // </ContList>
    // )
    
}

// ListContacts.propTyoes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })).isRequired,
//     onDelete: PropTypes.func,
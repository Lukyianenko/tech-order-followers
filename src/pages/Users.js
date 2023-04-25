import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tweets } from '../components/Users/Users';
// import { AddContscts } from '../components/BookContacts/AddContact';
// import { Filter } from '../components/BookContacts/FilterContacts';
import { fetchUsers } from '../redux/users/operations';
import { getIsLoading } from '../redux/selectors';

export default function Users() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {/* <Filter /> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <Tweets />
    </>
  );
}

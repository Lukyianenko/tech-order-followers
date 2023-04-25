import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux/es/exports";
import PropTypes from 'prop-types';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
// import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from '../redux/selectors';

const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/Users'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/users"
          element={<TweetsPage />} />
      </Route>
    </Routes>
  );
};


// App.propTypes = {
//   state: PropTypes.arrayOf(PropTypes.exact({
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })),
//   })),
// }

import { Navigate } from 'react-router-dom';
import { selectIsRefreshing } from '../redux/selectors';
import { useSelector } from "react-redux/es/exports";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
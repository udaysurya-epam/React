import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Protected({ children }) {
  const { isAuthenticated } =  useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default Protected;

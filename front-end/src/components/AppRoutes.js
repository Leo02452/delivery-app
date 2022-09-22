import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default AppRoutes;

import AppLayout from 'layout/AppLayout';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const WelcomePage = lazy(() => import('views/WelcomePage'));
const CrossMint = lazy(() => import('views/CrossMint'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<Navigate to="/crossmint" replace />}></Route>
            <Route path='/crossmint' element={<CrossMint/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;

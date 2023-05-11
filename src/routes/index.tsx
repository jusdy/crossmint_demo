import AppLayout from 'layout/AppLayout';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const CrossMint = lazy(() => import('views/CrossMint'));
const SaleItems = lazy(() => import('views/CrossMint/saleItems'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<Navigate to="/myitem" replace />}></Route>
            <Route path='/myitem' element={<CrossMint/>}></Route>
            <Route path='/salelist' element={<SaleItems/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;

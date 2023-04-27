import AppLayout from 'layout/AppLayout';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('views/WelcomePage'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<WelcomePage/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;

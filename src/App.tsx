import { Suspense } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from 'routes';
import ErrorPage from 'views/Error';
import SuspensePage from 'views/Suspense';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Web3Provider } from '@ethersproject/providers';

function App() {
  function getLibrary(provider: any) {
    return new Web3Provider(provider)
  }
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<SuspensePage />}>
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
    </Web3ReactProvider>
  );
}

export default App;

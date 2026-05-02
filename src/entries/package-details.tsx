import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import PackageDetails from '../pages/PackageDetails.tsx';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PackageDetails />
  </StrictMode>,
);

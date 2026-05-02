import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Packages from '../pages/Packages.tsx';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Packages />
  </StrictMode>,
);

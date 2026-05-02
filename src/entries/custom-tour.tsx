import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import CustomTour from '../pages/CustomTour.tsx';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomTour />
  </StrictMode>,
);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Gallery from '../pages/Gallery.tsx';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
);

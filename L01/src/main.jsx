import { createRoot } from 'react-dom/client'
import App from './App.jsx'

document.addEventListener(
  'load',
  createRoot(document.getElementById('root')).render(
      <App />
  )
);

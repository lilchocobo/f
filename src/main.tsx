import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ConversationProvider } from './context/ConversationContext';
import { ThemeProvider } from './components/ThemeProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ConversationProvider>
        <App />
      </ConversationProvider>
    </ThemeProvider>
  </StrictMode>
);
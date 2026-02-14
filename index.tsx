import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Application crashed:", error);
  // Fallback UI if the app crashes completely
  rootElement.innerHTML = `
    <div style="padding: 2rem; color: #cf2e2e; font-family: sans-serif; text-align: center;">
      <h1>Something went wrong</h1>
      <p>Please check the console for more details.</p>
      <pre style="background: #f4f4f4; padding: 1rem; border-radius: 4px; overflow: auto; text-align: left;">${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}
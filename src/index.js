import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './models';
import { App } from './components';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

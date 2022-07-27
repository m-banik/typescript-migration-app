import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './models';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <Provider store={store}>
      <h1>Hello World!</h1>
    </Provider>
  );
}

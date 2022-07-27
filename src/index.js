import React from 'react';
import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<h1>Hello World!</h1>);
}

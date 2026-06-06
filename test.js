import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './src/App.jsx';
import { StaticRouter } from 'react-router-dom/server'; // React Router v6+ support for SSR

try {
  // Since App might already include BrowserRouter, we might need to test the component directly or mock it
  // Wait, if App contains <Router>, renderToString will fail because BrowserRouter uses window.
  // Instead, let's just import Home and test it
  console.log("TEST!");
} catch (e) {
  console.log("ERROR FOUND:");
  console.error(e);
}

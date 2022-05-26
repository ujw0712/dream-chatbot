import { useState, useEffect } from 'react';
import App from './App';
import { BrowserRouter } from './core/Router'

const Root = () => {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;

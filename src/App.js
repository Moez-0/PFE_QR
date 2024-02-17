
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import FreeBarcoding from './pages/FreeBarcoding';
import Industries from './pages/Industries';
import Printing from './pages/Printing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="industries" element={<Industries />} />
          <Route path='login' element={<Login />} />
          <Route path='free-barcoding' element={<FreeBarcoding />} />
          <Route path='free-barcoding/printing' element={<Printing />} />
          <Route path='signup' element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import TopSales from './components/TopSales/TopSales';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Cart from './components/Cart/Cart';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Header />
    <Main>
      <Banner />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <TopSales />
              <Catalog />
            </>
          )}
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Main>
    <Footer />
  </BrowserRouter>,
);

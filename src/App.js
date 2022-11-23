import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import TopSales from './components/TopSales/TopSales';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Main>
        <Banner />
          <Routes>
            <Route path='/' element={ 
              <>
                < TopSales />
                < Catalog />
              </> 
            }/>
          </Routes>
        </Main>
        <Footer />
    </BrowserRouter>
  )
}

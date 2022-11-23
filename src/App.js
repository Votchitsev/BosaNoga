import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import TopSalesCatalogFragment from './components/MainPageFragment/MainPageFragment';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Main>
        <Banner />
          <Routes>
            <Route path='/' element={ <TopSalesCatalogFragment/> }/>
          </Routes>
        </Main>
    </BrowserRouter>
  )
}

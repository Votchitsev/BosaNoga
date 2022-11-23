import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import TopSales from './components/TopSales/TopSales';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Main>
        <Banner />
          <Routes>
            <Route exact path='/' element={ 
              <>
                < TopSales />
                < Catalog />
              </> 
            }/>
            <Route path='/about' element={ <About />}/>
          </Routes>
        </Main>
        <Footer />
    </BrowserRouter>
  )
}

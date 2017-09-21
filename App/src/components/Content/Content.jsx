import React from 'react';

import './style.scss';

import Nav from '../Nav/Nav';
import Advertisement from '../Advertisement/Advertisement';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';
import Users from '../Users/Users';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';


const Content = () => (
  <div className="content_wrapper">
    <div className="content_container">
      <div className="content_left">
        <Nav />
        <Advertisement />
        <Companies
          title={'Featured Companies'}
          link={'Follow Now'}
        />
        <Footer />
      </div>
      <main className="main">
        <Categories />
      </main>
      <div className="content_right">
        <Users
          title={'People you may know'}
          user={'Dennis Adams'}
          info={'Dentist (Practice Owner)'}
          city={'London, England'}
          link={'Add Friend'}
        />
        <Products
          title={'Featured products'}
          product={'Product Name'}
          info={'Product Short Description'}
          description={'The quick brown fox jumps over the lazy dog.'}
        />
        <Advertisement />
      </div>
    </div>
  </div>
);

export default Content;

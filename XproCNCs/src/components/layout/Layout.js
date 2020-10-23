import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
 
  return (
    <>
      <Header type={props.type}/>
      <main className="text-gray-900">{props.children}</main>
      <Footer type={props.type}/>
    </>
  );
};

export default Layout;

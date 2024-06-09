import '../index.css'
import React from 'react'
import Header from './Header'
import Body from './Body'
import NavBar from './NavBar'
import ContactUs from './ContactUs'
import Footer from "./Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Body />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App


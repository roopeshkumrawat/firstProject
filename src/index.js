import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import BannerCard from './Components/BannerCard';
import SocialHomeSection from './Components/SocialHomeSection';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='banner-section'>
      <Navbar />
      <div className='container'>
        <h1 className='w-75 m-auto py-5 text-center'>FUNfluential connects creators who love play with brands that build joyful products</h1>
        <BannerCard />
      </div>
    </div>
    <SocialHomeSection />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

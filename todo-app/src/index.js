import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';
import Header from './components/screens/Header/Header';
import Home from './components/screens/Home/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Header/>
      <Home/>
    </Layout>
  </React.StrictMode>
);



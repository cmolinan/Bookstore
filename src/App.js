import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/HomePage';
import Categories from './pages/CategoriesPage';
import './App.css';

const WebApp = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

const App = () => (
  ReactDOM.createRoot(document.getElementById('mainDiv'))
    .render(
      <React.StrictMode>
        <Router>
          <WebApp />
        </Router>
      </React.StrictMode>,
    )
);

export default App;

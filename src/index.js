import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Active from './pages/active';
import UserProfile from './pages/userProfile';
import NoPage from './pages/noPage';
import "./styles/style.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="active" element={<Active />}/>
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
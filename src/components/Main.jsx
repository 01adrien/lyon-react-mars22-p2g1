import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import Search from '../pages/Search';
import Form from '../pages/Form';
import MyProfile from '../pages/MyProfile';
import BoxDetail from '../pages/BoxDetail';
import BookDetail from '../pages/BookDetail';
import '../styles/Main.css';

export default function Main() {
  return (
    <main className="main-container">
      <div className="img-left img-desktop" />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/form" element={<Form />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/boxDetail/:boite" element={<BoxDetail />} />
          <Route path="/bookdetail/:id" element={<BookDetail />} />
        </Routes>
      </div>
      <div className="img-right img-desktop" />
    </main>
  );
}

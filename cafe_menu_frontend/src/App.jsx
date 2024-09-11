import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import SideBar from './components/SideBar';  // Sidebar bileşenini içe aktar
import CafePage from './page/CafePage';  // CafePage bileşenini içe aktar

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      

          <main className='content'>
            <Routes>
              <Route path="/cafe" element={<CafePage />} />
              {/* Diğer rotalar buraya eklenecek */}
            </Routes>
          </main>

         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

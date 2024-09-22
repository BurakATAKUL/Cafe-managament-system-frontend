import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import SideBar from './components/SideBar';  // Sidebar bileşenini içe aktar
import CafePage from './page/CafePage';  // CafePage bileşenini içe aktar
import AddCafe from './page/AddCafe';
import UpdateCafe from './page/UpdateCafe';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


          <main className='content' style={{
           width: '100%', // Tüm genişliği kullan
           maxWidth: '1400px', // Daha geniş bir maksimum genişlik ver
           height: 'auto', // Yükseklik içeriğe göre büyüsün
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           margin: '0 auto', // Ortalamak için
           padding: '20px' // İç boşluk ekleyerek rahat bir görünüm sağlar
          }}>
            <Routes>
              <Route path="/cafe" element={<CafePage />} />
              {/* Diğer rotalar buraya eklenecek */}
              <Route path='/addCafe' element={<AddCafe />} />
              <Route path="/edit-cafe/:id" element={<UpdateCafe/>}/>
            </Routes>
          </main>


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

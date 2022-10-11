import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrimarySearchAppBar from '../components/Appbar';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../context/UserContext';
import ContactPage from '../pages/ContactPage';
import DashboardPage from '../pages/DashboardPage';

export default function AppRouter() {
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLang, setUserLang] = useState('en');
  const [open, setOpen] = useState(false);

  return (
    <>
        <BrowserRouter>
          <UserContext.Provider value={{ 
            user: [user, setUser], 
            userEmail: [userEmail, setUserEmail], 
            userLang: [userLang, setUserLang],
            modalState: [open, setOpen] 
          }}>
            <Sidebar />
            <PrimarySearchAppBar />
          </UserContext.Provider>

          <Routes>
              <Route index element={               
                <UserContext.Provider value={{ 
                  user: [user, setUser], 
                  userEmail: [userEmail, setUserEmail], 
                  userLang: [userLang, setUserLang],
                  modalState: [open, setOpen]  
                }}>
                  <DashboardPage /> 
                </UserContext.Provider>} />
              <Route path='contact' element={               
                <UserContext.Provider value={{ 
                  user: [user, setUser], 
                  userEmail: [userEmail, setUserEmail], 
                  userLang: [userLang, setUserLang] 
                }}>
                  <ContactPage /> 
                </UserContext.Provider>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

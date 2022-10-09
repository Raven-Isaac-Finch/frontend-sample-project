import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import ContactPage from '../pages/ContactPage';
import DashboardPage from '../pages/DashboardPage';

export default function AppRouter() {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userLang, setUserLang] = useState('en');

  return (
    <>
        <BrowserRouter>
            <Routes>
              
                <Route index element={ 
                  <UserContext.Provider value={{ 
                    user: [user, setUser], 
                    userEmail: [userEmail, setUserEmail], 
                    userLang: [userLang, setUserLang] 
                  }}>
                    <DashboardPage />
                  </UserContext.Provider> } />
                <Route path='contact' element={ 
                  <UserContext.Provider value={{ 
                    user: [user, setUser], 
                    userEmail: [userEmail, setUserEmail],
                    userLang: [userLang, setUserLang]
                  }}>
                    <ContactPage />
                  </UserContext.Provider> } />
              
            </Routes>
        </BrowserRouter>
    </>
  )
}

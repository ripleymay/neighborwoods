import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import AvailTreesPage from '../AvailTreesPage/AvailTreesPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <div className="main-content">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders" element={< OrderHistoryPage user={user}/>} />
            <Route path="/orders/new" element={< NewOrderPage user={user}/>} />
            <Route path="/trees/available" element={< AvailTreesPage />} />
            <Route path="/*" element={<Navigate to="/orders" />} />
          </Routes>
        </div>
        :
        <div className="main-content">
          <AuthPage setUser={setUser} />
        </div>
      }
      <div className="tree-liner"></div>
    </main>
  );
}

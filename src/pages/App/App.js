import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import AdminOrdersPage from '../AdminOrdersPage/AdminOrdersPage';
import AvailTreesPage from '../AvailTreesPage/AvailTreesPage';
import AdminTreesPage from '../AdminTreesPage/AdminTreesPage';
import AdminUsersPage from '../AdminUsersPage/AdminUsersPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import NavBar from '../../components/NavBar/NavBar';
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        user.isAdmin ? 
        <div className="main-content">
          <AdminNavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/all" element={< AdminOrdersPage />} />
            <Route path="/users/all" element={< AdminUsersPage />} />
            <Route path="/trees/all" element={< AdminTreesPage />} />
            <Route path="/settings" element={< SettingsPage user={user} setUser={setUser}/>} />
            <Route path="/*" element={<Navigate to="/orders/all" />} />
          </Routes>
        </div>
        :
        <div className="main-content">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders" element={< OrderHistoryPage user={user}/>} />
            <Route path="/orders/new" element={< NewOrderPage user={user}/>} />
            <Route path="/trees/available" element={< AvailTreesPage />} />
            <Route path="/settings" element={< SettingsPage user={user} setUser={setUser}/>} />
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

import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <aside className="side-nav">
      <h3>Welcome, <br /> <span className="username">{props.user.name}</span></h3>
      <Link to="orders">📂 My Orders</Link>
      <Link to="orders/new">📥 New Order</Link>
      <Link to="trees/available">🌳 Available Trees</Link>
      <Link to="settings">⚙️ Settings</Link>
      <Link to="" onClick={handleLogOut}>↩️ Log Out</Link>
    </aside>
  );
}
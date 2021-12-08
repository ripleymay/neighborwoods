import React from 'react';
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
      <Link to="orders/all">📂 All Orders</Link>
      <Link to="users/all">👥 All Users</Link>
      <Link to="trees/all">🌳 Edit Trees</Link>
      <Link to="settings">⚙️ Settings</Link>
      <Link to="" onClick={handleLogOut}>↩️ Log Out</Link>
    </aside>
  );
}
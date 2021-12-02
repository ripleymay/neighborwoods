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
      <h3>Welcome, {props.user.name}</h3>
      <Link to="">New Order</Link>
      <Link to="orders">All Orders</Link>
      <Link to="trees/available">See Available Trees</Link>
      <Link to="">Settings</Link>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </aside>
  );
}
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
      <Link to="orders"><span className="emoji">đ </span>My Orders</Link>
      <Link to="orders/new"><span className="emoji">đĨ </span>New Order</Link>
      <Link to="trees/available"><span className="emoji">đŗ </span>Available Trees</Link>
      <Link to="settings"><span className="emoji">âī¸ </span>Settings</Link>
      <Link to="" onClick={handleLogOut}><span className="emoji">âŠī¸ </span> Log Out</Link>
    </aside>
  );
}
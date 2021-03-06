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
      <Link to="orders/all"><span className="emoji">đ </span>All Orders</Link>
      <Link to="users/all"><span className="emoji">đĨ </span>All Users</Link>
      <Link to="trees/all"><span className="emoji">đŗ </span>Edit Trees</Link>
      <Link to="settings"><span className="emoji">âī¸ </span>Settings</Link>
      <Link to="" onClick={handleLogOut}><span className="emoji">âŠī¸ </span>Log Out</Link>
    </aside>
  );
}
import React, { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api';
import './AdminUsersPage.css'

export default function AdminUsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(function() {
        async function getUsers() {
          const users = await usersAPI.getAll();
          setUsers(users);
        }
        getUsers();
      }, []);

    return (
        <main className="AdminUsersPage">
            <h1>All users</h1>
            {users.length ? 
                <div className="user-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>User since</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u =>
                                <tr key={u._id}>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.createdAt}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>                
                </div>
                : 
                <h2>No users yet</h2>
            }
        </main>
    );
}
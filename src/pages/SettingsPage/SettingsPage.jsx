import React, {useState} from 'react';
import * as usersAPI from '../../utilities/users-api';
import './SettingsPage.css';


export default function SettingsPage({ user, setUser}) {

    const [userInfo, setUserInfo] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone
      });
    const [showForm, setShowForm] = useState(false);
    
    function handleChange(evt) {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUser = await usersAPI.update(user._id, userInfo);
        setUser(updatedUser);
        setShowForm(false);
    }
    
    return (
        <main className="SettingsPage">
            <h1 className="page-title">Your settings</h1>
            <hr />
            { !showForm ? 
            <div id="user-info">
                <p>Email: {userInfo.email}</p>
                <p>Phone: {userInfo.phone}</p>
                <button className="auth-btn" onClick={() => setShowForm(true)}>Edit</button>
            </div>
            : 
            <form autoComplete="off" className="settings-form auth-form"  onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
                <label>Email</label>
                <input type="text" name="email" value={userInfo.email} onChange={handleChange} required />
                <label>Phone</label>
                <input type="text" name="phone" value={userInfo.phone} onChange={handleChange} required />
                <button className="auth-btn submit" type="submit">Update</button>
            </form>}
        </main>
    );
}
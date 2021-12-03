import { useState } from 'react';

export default function OrderAddyForm() {
  const [addyData, setAddyData] = useState({
    street: '',
    zip: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setAddyData({ ...addyData, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
    //   const user = await usersService.login(credentials);
    //   setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label>Street address</label>
          <input name="address" value={addyData.address} onChange={handleChange} required />
          <label>Zip Code</label>
          <input name="zip" value={addyData.zip} onChange={handleChange} required />
          <button type="submit">Validate Address</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
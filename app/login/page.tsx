"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    //await signIn('credentials', { username, password });

    const user: User = {name: username, email: "a@b.com", password: password};

    addUser(user)
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Error in calling the users API');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  const addUser = async (user: User) => {
    const { name, email, password } = user;
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Error in calling the users API');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit}>
        <label className='text-gray-800'>
          Username: <input name="username" type="text" />
        </label>
        <label className='text-gray-800'>
          Password: <input name="password" type="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <div>
        {error && <p>Error: {error}</p>}
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.email}>{user.name}: {user.email}</li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
      <button onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
}

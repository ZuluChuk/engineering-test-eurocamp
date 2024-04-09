import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/1/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Task 3</h1>
      {users.data.length > 0 ? (
      <ul>
        {users.data.map(user => (
          <li key={user.id}>
            <b>{user.name}</b>, {user.email}
          </li>
        ))}
      </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Task3;
import React, { useState } from 'react';

const UserProfileTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123456789', address: '123 Street', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987654321', address: '456 Avenue', role: 'User' },
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    role: '',
  });

  // Handle input changes for new user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a new user
  const handleAddUser = () => {
    const id = users.length + 1; // Automatically generate id for new user
    setUsers([...users, { ...newUser, id }]);
    setNewUser({
      name: '',
      email: '',
      phone: '',
      address: '',
      role: '',
    });
  };

  // Edit user data
  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit); // Set form values to the user's current data
  };

  // Delete user
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Profiles</h2>
      <form>
        <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="phone" value={newUser.phone} onChange={handleChange} placeholder="Phone" />
        <input type="text" name="address" value={newUser.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="role" value={newUser.role} onChange={handleChange} placeholder="Role" />
        <button type="button" onClick={handleAddUser}>Add User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfileTable;

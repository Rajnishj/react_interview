import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodolistUndo = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      // Update the existing user
      const updatedUsers = users.map((user) =>
        user.id === editingId ? { ...user, ...formData } : user
      );
      setUsers(updatedUsers);
      setEditingId(null);
    } else {
      // Add a new user with a unique ID
      setUsers([...users, { ...formData, id: uuidv4() }]);
    }
    setFormData({ username: "", email: "" });
  };

  const deleteUser = (id) => {
    const userToDelete = users.find((user) => user.id === id);
    if (userToDelete) {
      setDeletedUsers([userToDelete, ...deletedUsers]);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  const undoDelete = () => {
    if (deletedUsers.length > 0) {
      const [lastDeletedUser, ...remainingDeletedUsers] = deletedUsers;
      setUsers([lastDeletedUser, ...users]);
      setDeletedUsers(remainingDeletedUsers);
    }
  };

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingId(id);
    setFormData({ username: userToEdit.username, email: userToEdit.email });
  };

  return (
    <div className="mt-4 px-6">
      <h1 className="text-4xl">Todo List</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Add a new todo"
          name="username"
          className="mt-2 p-2 w-[400px] border rounded"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="mt-2 p-2 w-[400px] border border-slate-500 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={formData.username === "" || formData.email === ""}
          className="bg-blue-500 text-white p-2 w-[100px] mt-4 rounded"
        >
          {editingId !== null ? "Save" : "Submit"}
        </button>
      </form>
      <div className="mt-6">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="border p-2 rounded mb-4">
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <div className="flex">
                <button
                  onClick={() => editUser(user.id)}
                  className="w-[100px] rounded bg-green-400 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="w-[100px] rounded bg-orange-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-red-600">No data found</h1>
        )}
      </div>
      <button
        onClick={undoDelete}
        disabled={deletedUsers.length === 0}
        className="w-[100px] rounded bg-purple-700 p-2 mt-4"
      >
        Undo
      </button>
    </div>
  );
};

export default TodolistUndo;

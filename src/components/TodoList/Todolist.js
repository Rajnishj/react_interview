import React, { useState } from "react";

const Todolist = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
const [editableId, setEditableId] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if(editableId !== null){
    const updatedItems = users.map(user => user.id === editableId ? {...user,...formData} :user)
    setUsers(updatedItems)
    setEditableId(null)
    setFormData({
      username: "",
      email: "",
    });
  }else{
    setUsers([...users, {...formData,id:Date.now()}]);
    setFormData({
      username: "",
      email: "",
    });
  }

}
const handleEdit  =(user) => {
  setEditableId(user.id)
  setFormData({
    username: user.username,
    email: user.email,
  });
}
  const handleDelete = (user) => {
    const filteredUsers = users.filter((item) => item.id !== user.id);
    setUsers(filteredUsers);
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
          className="bg-blue-500 text-white p-2 w-[100px] mt-4 rounded">
          {editableId !== null  ? "Save" : "Submit"}
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
                  onClick={() => handleEdit(user)}
                  className="w-[100px] rounded bg-green-400 mr-4">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user)}
                  className="w-[100px] rounded bg-orange-300">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-red-600">No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Todolist;

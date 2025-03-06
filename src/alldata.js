import { useState, useEffect } from "react";
import axios from "axios";
import "./Alldata.css"; // Import CSS here

export default function Alldata() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", amount: "" });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await axios.get("https://bank-server-wh3o.onrender.com/data");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`https://bank-server-wh3o.onrender.com/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  function handleEdit(item) {
    setEditId(item._id);
    setFormData({ name: item.name, email: item.email, password: item.password, amount: item.amount });
  }

  async function handleUpdate() {
    try {
      await axios.put(`https://bank-server-wh3o.onrender.com/update/${editId}`, formData);
      setData(data.map((item) => (item._id === editId ? { ...item, ...formData } : item)));
      setEditId(null);
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  return (
    <div className="alldata-container">
      <h1 className="alldata-heading">All Data</h1>
      <table className="alldata-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.amount}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL POPUP */}
      {editId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Data</h2>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            <button className="update-button" onClick={handleUpdate}>Update</button>
            <button className="cancel-button" onClick={() => setEditId(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

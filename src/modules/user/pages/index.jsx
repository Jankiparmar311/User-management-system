import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { createUser, updateUser } from "../../../services/userApi";
import Modal from "../../../components/Modal";
import { toast } from "react-toastify";

export default function Users() {
  const [editingUser, setEditingUser] = useState(null);
  const [isOpen, setIsOpen] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, values);
        setEditingUser(null);
      } else {
        await createUser(values);
      }

      resetForm();
      setIsOpen(false);
      setRefreshKey((k) => k + 1); // refresh list
      toast.success(
        editingUser
          ? "User updated successfully."
          : "User created successfully.",
      );
    } catch {
      toast.error("Failed to save user!");
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              User Management
            </h1>
            <p className="text-gray-500">Manage system users</p>
          </div>

          <button
            onClick={handleAddUser}
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer transition
               text-white px-5 py-2 rounded-lg shadow"
          >
            + Add User
          </button>
        </div>

        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <UserForm onSubmit={handleSubmit} editingUser={editingUser} />
          </Modal>
        )}

        <UserList onEdit={handleEditUser} refreshKey={refreshKey} />
      </div>
    </div>
  );
}

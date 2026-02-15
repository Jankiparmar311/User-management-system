import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../../services/userApi";
import Modal from "../../../components/Modal";
import { toast } from "react-toastify";

export default function UserList({ onEdit, refreshKey }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refreshKey]);

  const handleDelete = async () => {
    await deleteUser(deleteUserId);
    setDeleteUserId(null);
    toast.success("User deleted successfully.");
    fetchUsers();
  };

  const filteredUsers = users.filter((u) =>
    `${u.firstName} ${u.lastName} ${u.email}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <input
        placeholder="Search users..."
        className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-medium">
                      {search ? "No users found" : "No users yet"}
                    </span>

                    <span className="text-sm text-gray-400">
                      {search
                        ? "Try a different search keyword."
                        : "Click 'Add User' to create your first user."}
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  className="hover:bg-gray-50 border-b transition"
                  key={user.id}
                >
                  <td className="p-3 border-b">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="p-3 border-b">{user.email}</td>
                  <td className="p-3 border-b">{user.phone}</td>
                  <td className="p-3  flex gap-2 flex-wrap">
                    <button
                      onClick={() => onEdit(user)}
                      className="bg-amber-400 hover:bg-amber-500 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setDeleteUserId(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {deleteUserId && (
        <Modal onClose={() => setDeleteUserId(null)}>
          <div>
            <h3 className="text-lg font-semibold mb-4">Delete User</h3>

            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this user?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteUserId(null)}
                className="px-4 py-2 cursor-pointer bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

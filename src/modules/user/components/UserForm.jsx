import { useFormik } from "formik";
import {
  userFields,
  validationSchema,
  initialValues,
} from "../../../config/formField";
import { useState } from "react";

export default function UserForm({ onSubmit, editingUser }) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: editingUser || initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, helpers) => {
      setLoading(true);
      await onSubmit(values, helpers);
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-xl font-bold mb-4">
        {editingUser ? "Edit User" : "Add User"}
      </h2>

      {userFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1 font-medium">{field.label}</label>

          <input
            type={field.type || "text"}
            name={field.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.name] || ""}
            className="w-full border border-gray-300 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition"
          />

          {formik.touched[field.name] && formik.errors[field.name] && (
            <p className="text-red-500 text-sm">{formik.errors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 transition
        text-white px-6 py-2 rounded-lg shadow"
      >
        {loading ? "Saving..." : editingUser ? "Update User" : "Save User"}
      </button>
    </form>
  );
}

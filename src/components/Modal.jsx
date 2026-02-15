export default function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm
                    flex items-center justify-center z-50"
    >
      <div
        className="bg-white rounded-2xl shadow-xl
                      w-full max-w-xl p-8 relative
                      animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4
                     text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

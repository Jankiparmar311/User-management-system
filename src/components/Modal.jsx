export default function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm
                 flex items-start justify-center z-50
                 overflow-y-auto p-4"
    >
      <div
        className="bg-white rounded-2xl shadow-xl
                   w-full max-w-xl relative
                   animate-fadeIn mt-10 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4
                     text-gray-400 hover:text-gray-700 z-10 cursor-pointer"
        >
          ✕
        </button>

        {/* Scrollable content */}
        <div className="p-8 max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

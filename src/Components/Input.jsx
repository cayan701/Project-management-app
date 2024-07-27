import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;

// import { useState } from "react";

export default function Login({isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-white">Login</h2>

        <input type="text" placeholder="Username" className="w-full p-2 mb-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />

        <button 
          className="absolute top-2 right-2 text-white" 
          onClick={onClose}
        >
          ✖
        </button>

        <button className="bg-green-500 w-full p-2 rounded">Login</button>
      </div>
    </div>
  );
}

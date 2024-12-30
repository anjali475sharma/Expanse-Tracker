import React from "react";

function Hero() {
  return (
    <div className="p-4">
      <div className="p-4">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-black">Expense Tracker</h1>
          <button className="px-4 py-2 rounded-lg bg-gray-200">Logout</button>
        </div>
        <div className="flex justify-center items-center space-x-5 p-2">
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center space-y-4">
            <p className="text-2xl text-black">
              Wallet Balance: <span className="text-red-500 text-lg">$3000</span>
            </p>
            <button className="w-24 py-2 rounded-lg bg-blue-500 text-white hover:bg-white hover:text-black">
              Add Income
            </button>
          </div>
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center space-y-4">
            <p className="text-2xl text-black">
              Expenses: <span className="text-red-500 text-lg">$5500</span>
            </p>
            <button className="w-24 py-2 rounded-lg bg-blue-500 text-white hover:bg-white hover:text-black">
              Add Expense
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="text-black lg:text-3xl lg:font-bold">Recent Transactions</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between h-16 bg-white/30 backdrop-blur-md rounded-lg border border-white p-4">
              <div>
                <h1 className="text-lg text-gray-900">Samosa</h1>
                <p className="text-sm text-gray-700">March 21, 2024</p>
              </div>
              <div className="flex space-x-4">
                <span className="text-red-500 font-semibold cursor-pointer hover:text-white">Edit</span>
                <span className="text-red-500 font-semibold cursor-pointer hover:text-white">Delete</span>
              </div>
            </div>
            <div className="flex items-center justify-between h-16 bg-white/30 backdrop-blur-md rounded-lg border border-white p-4">
              <div>
                <h1 className="text-lg text-gray-900">Samosa</h1>
                <p className="text-sm text-gray-700">March 21, 2024</p>
              </div>
              <div className="flex space-x-4">
                <span className="text-red-500 font-semibold cursor-pointer hover:text-white">Edit</span>
                <span className="text-red-500 font-semibold cursor-pointer hover:text-white">Delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

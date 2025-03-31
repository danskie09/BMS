import React from 'react'

function CustomerDashboard({ user }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Customer Dashboard</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome, {user.name}!</h2>
        <p className="text-gray-600">Your customer dashboard gives you access to place orders, view order history, and manage your account.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Quick Actions</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Place New Order</li>
            <li className="text-blue-600 hover:underline cursor-pointer">View Order History</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Edit Profile</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-medium text-green-800 mb-2">Recent Activity</h3>
          <p className="text-gray-500 italic">No recent activity to display</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
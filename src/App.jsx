import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-700 mb-6">
          This is a simple test component to see if Tailwind CSS is working properly.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
            Button 1
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition-colors">
            Button 2
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
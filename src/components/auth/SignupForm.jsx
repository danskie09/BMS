import React, { useState } from 'react'
import supabase from '../../lib/supabase'

function SignupForm({ onSignupComplete }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Create the user in auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      })

      if (error) throw error

      // With RLS enabled, we need to insert the user record while we have the session
      if (data.user) {
        // Insert user profile after successful signup
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            { 
              id: data.user.id, 
              name, 
              email,
              role: 'customer', // Default role
            }
          ])

        if (profileError) throw profileError
        
        // Check if we need to confirm email
        if (data.session) {
          // User is immediately signed in - no email confirmation required
          setMessage('Signup successful! Redirecting...')
          
          // Reset form and redirect
          setEmail('')
          setPassword('')
          setName('')
          
          if (onSignupComplete) {
            setTimeout(() => onSignupComplete(data.user), 1500)
          }
        } else {
          // Need to confirm email
          setMessage('Signup successful! Please check your email to confirm your account.')
          
          // Reset form
          setEmail('')
          setPassword('')
          setName('')
          
          // Don't redirect yet - user needs to confirm email first
        }
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Sign Up</h1>
      {message && (
        <p className={`mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
          minLength="6"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        disabled={loading}
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  )
}

export default SignupForm
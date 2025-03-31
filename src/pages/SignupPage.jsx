import React from 'react'
import Container from '../components/layout/Container'
import SignupForm from '../components/auth/SignupForm'

function SignupPage({ onSignupComplete }) {
  return (
    <Container>
      <SignupForm onSignupComplete={onSignupComplete} />
    </Container>
  )
}

export default SignupPage
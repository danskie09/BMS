import React from 'react'
import Container from '../components/layout/Container'
import LoginForm from '../components/auth/LoginForm'

function LoginPage({ onLoginSuccess }) {
  return (
    <Container>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </Container>
  )
}

export default LoginPage
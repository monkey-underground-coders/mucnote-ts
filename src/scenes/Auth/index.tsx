import React from 'react'
import { Redirect } from 'react-router-dom'

const AuthScene = () => {
  // TODO: Replace with selectors
  const isAuthenticated = true

  if (isAuthenticated) {
    return <Redirect to="/cabinet"></Redirect>
  }

  return <div>Auth form. Coming soon</div>
}

export default AuthScene

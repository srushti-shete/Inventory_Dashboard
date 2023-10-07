import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (name, email, password, city, state, country, occupation, phoneNumber, role) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5001/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password, city, state, country, occupation, phoneNumber, role })
    })
    // console.log(JSON.stringify({ name, email, password, city, state, country, occupation, phoneNumber, role }))
    const json = await response.json()
    // console.log(json)
    if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))
  
        // update the auth context
        dispatch({type: 'LOGIN', payload: json})
  
        // update loading state
        setIsLoading(false)
      }
  }

  return { signup, isLoading, error }
}
import React, { useState } from 'react'

import Modal from '../Shared/Modal'

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    // TODO: Implement form validation and submission logic
    console.log('Login attempted:', formData)

    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </Modal>
  )
}

export default LoginForm

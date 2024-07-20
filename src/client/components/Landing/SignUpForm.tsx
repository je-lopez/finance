import React, { useState } from 'react'
import axios from 'axios'

import Modal from '../Shared/Modal'

interface SignUpFormProps {
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    // TODO: Implement form validation and submission logic
    
    await axios.post('/signup', formData, {
      headers: {
        'Content-Type': 'application/json'
        // TODO: lookup: what other headers are important?
      }
    })
      .then(res => {
        // if Created (201)
        if (res.status === 201) {
          // TODO: implement logging (informational logging)
          console.log('Form submitted:', formData)
          // TODO: redirect to Landing/home page
        } else {
          // TODO: check when we can encounter this. add logging
          console.log('Form not submitted?')
        }
        console.log('RESPONSE', res)
      })
      .catch(err => {
        console.log('Error signing up.')
        // TODO: implement logging (error logging)
      })

    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-row'>
          <button className='form-btn' type="submit">Sign Up</button>
        </div>
      </form>
    </Modal>
  )
}

export default SignUpForm

import React from 'react'

import { useUser } from '../context/UserContext'

const Login: React.FC = () => {
  const { name,email,password,setName,setEmail,setPassword, setUser } = useUser()

  const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    let data = {
      name,
      email,
      password
    }
    setUser(data)
    console.log(data)
    return data
  }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input
                 type="text"
                  onChange={handleName}
                  value={name}
                  />
            </label>

            <label>
                <span>Email:</span>
                <input
                 type="email"
                 onChange={handleEmail}
                 value={email}
                  />
            </label>

            <label>
                <span>Senha:</span>
                <input
                 type="password"
                  onChange={handlePassword}
                  value={password}
                  />
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Login
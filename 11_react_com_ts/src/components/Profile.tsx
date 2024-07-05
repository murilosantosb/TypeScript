import React from 'react'
import { useUser } from '../context/UserContext'

type Props = {}

const Profile = (props: Props) => {
    const {name,email} = useUser()

  return (
    <div>
        <h1>Perfil</h1>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
    </div>
  )
}

export default Profile
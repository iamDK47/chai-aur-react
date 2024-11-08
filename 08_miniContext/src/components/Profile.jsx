import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
   
   let {user} = useContext(UserContext)

  return (
    <div>
      <h1>Welcome : {user.username}</h1>
    </div>
  )
}

export default Profile
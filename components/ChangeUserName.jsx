import React from 'react'
import { useMoralis } from 'react-moralis'

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()
  const setUserName = () => {
    const username = prompt('Enter your new user name')
    if (!username) return
    setUserData({ username })
  }

  return (
    <div className="absolute top-5 right-5 text-sm ">
      <button
        disabled={isUserUpdating}
        onClick={() => setUserName()}
        className="font-bold text-green-600 hover:text-green-400"
      >
        change user name
      </button>
    </div>
  )
}

export default ChangeUserName

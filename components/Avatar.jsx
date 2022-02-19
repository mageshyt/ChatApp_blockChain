import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const Avatar = ({ userName, logoutOnPress }) => {
  const { user, logout } = useMoralis()

  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${
        userName || user.getUsername()
      }.svg`}
      className="cursor-pointer rounded-full object-contain hover:opacity-75"
      layout="fill"
      onClick={logoutOnPress ? logout : null}
    />
  )
}

export default Avatar
// https://avatars.dicebear.com/api/open-peeps/magesh.svg

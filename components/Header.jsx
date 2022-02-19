import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUserName from './ChangeUserName'
const Header = () => {
  const { user } = useMoralis()
  console.log('name', user.getUsername())

  return (
    <div className="sticky z-50 border-b-2 border-b-green-500 bg-[#121221]  p-5 shadow-xl">
      <div className="grid grid-cols-5 items-end  p-5 lg:grid-cols-6 lg:items-center">
        {/* logo */}
        <div className="relative mx-auto hidden h-24 w-24 md:inline-grid">
          <Image
            src="/images/logo.jpg"
            layout="fill"
            className="rounded-full object-contain"
          />
        </div>

        <div className="col-span-4 flex flex-col items-center lg:text-center">
          <div className="relative mx-auto h-48 w-48 rounded-full border-8 border-green-400">
            {/* //! avatar */}
            <Avatar logoutOnPress={true} />
          </div>
          {/* //! Welcome message */}
          <h2 className="mt-2 font-bold text-green-500 lg:text-3xl">
            Welcome to Magesh Yt MetaVerse
          </h2>
          <span className="truncate text-xl font-bold text-green-500 lg:text-5xl">
            {user.getUsername()}
          </span>
          {/*  //! change user name */}
          <ChangeUserName />
        </div>
      </div>
    </div>
  )
}

export default Header

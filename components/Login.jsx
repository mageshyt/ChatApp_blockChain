import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
const Login = () => {
  const { authenticate } = useMoralis()

  return (
    <div className="relative h-screen overflow-hidden bg-[#121212]">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-2">
        {/* logo */}
        <Image
          src="/images/logo.jpg"
          width={200}
          className="rounded-full object-contain"
          height={200}
        />
        {/* Login Button */}
        <button
          onClick={authenticate}
          className="rounded-lg bg-green-400 p-4 font-bold "
        >
          Login To MetaVerse
        </button>
      </div>
      {/* Login form */}
      <div className=" w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
        {/* <Image src="/images/bg-1.jpg" objectFit="contain" layout="fill" /> */}
      </div>
    </div>
  )
}

export default Login

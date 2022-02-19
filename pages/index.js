import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Message from '../components/Message'
import Header from '../components/Header'
const Home = () => {
  const { isAuthenticated, logout } = useMoralis()

  // const isAuthenticated = false
  console.log({ isAuthenticated })
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-700 to-[#121212]">
      <Head>
        <title>Metaverse Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <button onClick={logout}>Log out</button> */}
      <div className=" mx-auto max-w-screen-2xl  ">
        {/* 
        // ! Header 
        */}
        <Header />
        <Message />
      </div>
    </div>
  )
}

export default Home

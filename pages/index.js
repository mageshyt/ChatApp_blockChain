import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'

const Home = () => {
  const { isAuthenticated } = useMoralis()
  // const isAuthenticated = false
  console.log({ isAuthenticated }) 
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen ">
      <Head>
        <title>Metaverse Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the mataverse</h1>
    </div>
  )
}

export default Home

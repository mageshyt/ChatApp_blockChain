import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
const supportedChainIds = [4]
const connectors = {
  injected: {},
}
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID_KEY}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </MoralisProvider>
  )
}

export default MyApp

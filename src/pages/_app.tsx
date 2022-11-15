import { AppProps } from 'next/app'
import { globalStyles } from '../../shared/Home/styles'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400','500','600']
})

const App = ({ Component, pageProps }: AppProps) => (
 
  <main className={poppins.className}>
    {globalStyles}
    <Component {...pageProps} />
    
  </main>
)

export default App

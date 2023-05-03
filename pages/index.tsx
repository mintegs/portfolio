import Main from '@/src/components/main'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mintegs</title>
      </Head>
      <Main />
    </>
  )
}

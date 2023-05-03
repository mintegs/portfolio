import Main from '@/src/components/main'
import Head from 'next/head'
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { asPath, pathname } = useRouter()
  return (
    <>
      <Head>
        <title>{asPath === '/' ? 'Mintegs' : asPath.replace('/#', '')}</title>
        <meta
          name='description'
          content='My personal website'
        />
      </Head>
      <Main />
    </>
  )
}

// export async function getStaticProps(context: any) {
//   console.log(context)
//   // Call an external API endpoint to get posts
//   // const res = await fetch('https://.../posts')
//   // const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       // posts,
//     },
//   }
// }

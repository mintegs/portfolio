import Main from '@/src/components/main'
import Head from 'next/head'
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ user }: { user: any }) {
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
      <Main user={user} />
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/mohamadresaaa', {
    headers: {
      authorization: `Bearer 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`,
    },
  }).then((response) => response.json())

  return {
    props: {
      user: response,
    },
  }
}

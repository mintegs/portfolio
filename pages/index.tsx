import Main from '@/src/components/main'
import { NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ user }: { user: any }) {
  const { t } = useTranslation()
  const { asPath, pathname } = useRouter()
  return (
    <>
      <Head>
        <title>
          {t(asPath === '/' ? 'mintegs' : asPath.replace('/#', ''))}
        </title>
        <meta
          name='description'
          content='My personal website'
        />
      </Head>
      <Main user={user} />
    </>
  )
}

export async function getStaticProps({ locale = 'fa' }: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

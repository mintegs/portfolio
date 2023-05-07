import { NextPageContext } from 'next'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

const MyDocument = ({ locale }: NextPageContext) => {
  return (
    <Html lang={locale?.replace('us', 'en')}>
      <Head>
        <link
          rel='manifest'
          href='/manifest.json'
        />
        <link
          rel='apple-touch-icon'
          href='/icon-192x192.png'
        ></link>
        <link
          rel='shortcut icon'
          href='/logo.ico'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    locale: ctx?.locale || 'fa',
  }
}

export default MyDocument

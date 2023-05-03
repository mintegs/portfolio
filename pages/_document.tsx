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
      <Head />

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

import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const SecondPage = () => {

  const router = useRouter()
  const { t } = useTranslation('second-page')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <pre>
          router.asPath: {router.asPath}<br/>
          router.pathname: {router.pathname}
        </pre>
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['second-page', 'footer']),
  },
})

export default SecondPage

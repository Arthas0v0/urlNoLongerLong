import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Script from 'next/script';
export default function Home() {
  return (
    <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-24GN53DR5M"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-24GN53DR5M');
        `}
      </Script>

      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5423452592706998"
     crossOrigin="anonymous"></Script>
      <Head>

        <title>UrlNoLongerLong - URL Simple Shortener for eBay or Amazon</title>
        <meta
          name="description"
          content="Turn URL into a short,using no 3rd party service but website itself."
        />


      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

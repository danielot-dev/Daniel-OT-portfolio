import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import './globals.css'

export const metadata: Metadata = {
  title: "Daniel OT | Portfolio",
  description: "My professional portfolio",
};

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'Daniel OT | Portfolio', description = 'My professional portfolio' }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          <ParticlesBackground />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import './globals.css'
import type { Metadata } from "next";

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export const metadata: Metadata = {
  title: "Daniel OT | Portfolio",
  description: "Welcome to OT's Website!",
};

export default function Layout({ 
  children,  
}: LayoutProps) {
  return (
    <>
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      
      <div className="min-h-screen flex flex-col relative">
        <ParticlesBackground />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 md:px-6 md:items-center justify-center ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

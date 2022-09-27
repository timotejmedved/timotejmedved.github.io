import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Timotej Medved</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

/**
 *  
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
 */
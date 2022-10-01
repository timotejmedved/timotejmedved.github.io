import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 sticky bg-white drop-shadow ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
        <Link href="/">
          <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-color"
            >Timotej Medved</a>
            </Link><button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button" onClick="toggleNavbar('example-collapse-navbar')">
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
        <div className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden "
          id="example-collapse-navbar">

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">


            <li className="flex items-center">
              <Link href="/">
                <a className="button-nav" href="index.html">Domov</a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/about">
                <a className="button-nav">O meni</a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/projects">
                <a className="button-nav">Projekti</a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/acknowledgment">
                <a className="button-nav">Priznanja</a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/knowledge">
                <a className="button-nav">Znanja</a>
              </Link>
            </li>

        
            <li className="flex items-center">
              <Link href="/photo">
                <a className="button-nav">Foto</a>
              </Link>
            </li>


            <li className="flex items-center">
              <Link href="/contact">
                <a className="button-nav">Kontakt</a>
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

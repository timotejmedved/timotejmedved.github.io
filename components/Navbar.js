import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (

    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 sticky bg-white drop-shadow ">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
        <Link href="/">
          <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-color"
            >Timotej Medved</a>
            </Link><button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button" onclick="toggleNavbar('example-collapse-navbar')">
            <i class="text-white fas fa-bars"></i>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden "
          id="example-collapse-navbar">

          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">


            <li class="flex items-center">
              <Link href="/">
                <a class="button-nav" href="index.html">Domov</a>
              </Link>
            </li>

            <li class="flex items-center">
              <Link href="/about">
                <a class="button-nav">O meni</a>
              </Link>
            </li>

            <li class="flex items-center">
              <Link href="/projects">
                <a class="button-nav">Projekti</a>
              </Link>
            </li>

            <li class="flex items-center">
              <Link href="/acknowledgment">
                <a class="button-nav">Priznanja</a>
              </Link>
            </li>




            <li class="flex items-center">
              <Link href="/knowledge">
                <a class="button-nav">Znanja</a>
              </Link>
            </li>

        
            <li class="flex items-center">
              <Link href="/photo">
                <a class="button-nav">Foto</a>
              </Link>
            </li>


            <li class="flex items-center">
              <Link href="/contact">
                <a class="button-nav">Kontakt</a>
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 sticky bg-white drop-shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-color">
              Timotej Medved
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={toggleNavbar}
          >
           {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link href="/">
                <a className={router.pathname === "/" ? "button-nav-active text-color" : "button-nav"}>Domov</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/about">
                <a className={router.pathname === "/about" ? "button-nav-active text-color" : "button-nav"}>O meni</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/projects">
                <a className={router.pathname === "/projects" ? "button-nav-active text-color" : "button-nav"}>Projekti</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/acknowledgment">
                <a className={router.pathname === "/acknowledgment" ? "button-nav-active text-color" : "button-nav"}>Priznanja</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/knowledge">
                <a className={router.pathname === "/knowledge" ? "button-nav-active text-color" : "button-nav"}>Znanja</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/photo">
                <a className={router.pathname === "/photo" ? "button-nav-active text-color" : "button-nav"}>Foto</a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact">
                <a className={router.pathname === "/contact" ? "button-nav-active text-color" : "button-nav"}>Kontakt</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

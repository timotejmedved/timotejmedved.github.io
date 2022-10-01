import React from 'react'

export default function Header() {
  return (
    <header className="bg-black p-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="flex items-center">
                        <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                            href="index.html">
                            <i className="mr-2 fa-solid fa-user"></i>
                            Prijava</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

import React from 'react'

export default function Header() {
  return (
    <header class="bg-black p-1">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                            href="index.html">
                            <i class="mr-2 fa-solid fa-user"></i>
                            Prijava</a>
                    </li>
                </ul>
            </div>
        </div>

    </header>



  )
}

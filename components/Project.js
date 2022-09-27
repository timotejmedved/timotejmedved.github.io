import React from 'react'
import Link from 'next/link'

export default function Project({ project }) {
  return (
    <div class="flex overflow-hidden mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300    sm:flex-row flex-col">
      <div class="w-56 bg-cover flex-shrink-0" style={{ backgroundImage: 'url(' + project.image + ')' }}>

      </div>

      <div class=" w-full flex-grow">

        <h1 class="text-white bg-color font-semibold text-3xl p-1">{project.name}</h1>

        <div class="bg-gray-100 p-3">
          <p class="opacity-80 ">
            .pdf (v pripravi)


          </p>
          <div class="flex mt-2 item-center">
            <span>2016</span>
          </div>

          <div class="  mt-3 r-3">
            <span class="text-lg font-bold text-gray-700  md:text-xl mr-3">C#</span>
            <span class="text-lg font-bold text-gray-700  md:text-xl mr-3">WPF</span>
          </div>

          <div class="flex justify-between mt-3 item-center">

            <Link href={'/projects/' + project.id}>
              <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">Podrobnosti &rarr;</button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

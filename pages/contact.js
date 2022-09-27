import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div class="container mx-auto px-4 pb-60 pt-20">

      <div class="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <div class="p-1  bg-color">
          <h1 class="text-white font-semibold text-3xl">Kontakt</h1>
        </div>
        <div class="bg-gray-100 p-1">
          <p class="opacity-80 p-3">


            Piši mi na <span class="font-medium hover:text-color"><a href="mailto:timi.medved%40gmail.com">timi.medved@gmail.com</a></span> ali me kontaktiraj preko družabnih omrežij. 😃
          </p>
          <div class="opacity-80 p-3">
            


            <div class="flex flex-wrap pt-1">

              <a href="https://github.com/timotejmedved" target="_blank" class="pr-5 text-2xl icon-color hover:text-color"><i class="fa-brands fa-github"></i></a>

              <a href="https://www.linkedin.com/in/timotej-medved-74833a148/?originalSubdomain=si" target="_blank" class="pr-5 text-2xl icon-color hover:text-color"><i class="fa-brands fa-linkedin-in"></i></a>

              <a href="https://www.instagram.com/timimedved/" target="_blank" class="pr-5 text-2xl icon-color hover:text-color"><i class="fa-brands fa-instagram"></i></a>

              <a href="https://www.facebook.com/timi.medved.7/" target="_blank" class="pr-5 text-2xl icon-color hover:text-color"><i class="fa-brands fa-facebook-f"></i></a>

            </div>


          </div>

        </div>
      </div>


      <br /><br />

      <div class="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <div class="p-1  bg-color">
          <h1 class="text-white font-semibold text-3xl">Življenjepis - CV</h1>
        </div>
        <div class="bg-gray-100 p-1">
          <p class="opacity-80 p-3">
            .pdf (v pripravi)


          </p>
        </div>
      </div>

    </div>
   
  )
}

/*

      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">

        </div>
        <div>
          <p>Vsebina</p>
        </div>
      </div>
*/
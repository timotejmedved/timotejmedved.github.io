import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pb-60 pt-20">
      <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="p-1  bg-color">
          <h1 className="text-white font-semibold text-3xl">Kontakt</h1>
        </div>
        <div className="bg-gray-100 p-1">
          <p className="opacity-80 p-3">
            Piši mi na <span className="font-medium hover:text-color"><a href="mailto:timi.medved%40gmail.com">timi.medved@gmail.com</a></span> ali me kontaktiraj preko družabnih omrežij. 😃
          </p>
          <div className="opacity-80 p-3">
            <div className="flex flex-wrap pt-1">
              <a href="https://github.com/timotejmedved" rel="noreferrer" target="_blank" className="pr-5 text-2xl icon-color hover:text-color"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/timotej-medved-74833a148/?originalSubdomain=si" rel="noreferrer" target="_blank" className="pr-5 text-2xl icon-color hover:text-color"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/timimedved/" rel="noreferrer" target="_blank" className="pr-5 text-2xl icon-color hover:text-color"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/timi.medved.7/" rel="noreferrer" target="_blank" className="pr-5 text-2xl icon-color hover:text-color"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="p-1  bg-color">
          <h1 className="text-white font-semibold text-3xl">Življenjepis - CV</h1>
        </div>
        <div className="bg-gray-100 p-1">
          <p className="opacity-80 p-3">
            .pdf (v pripravi)
          </p>
        </div>
      </div>
    </div>
  )
}

/*

      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md">

        </div>
        <div>
          <p>Vsebina</p>
        </div>
      </div>
*/
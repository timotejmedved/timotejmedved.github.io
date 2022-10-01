import React from 'react'
import Znanja from '../data/knowledge.json'

export default function Knowledge() {
  return (
    <div className="container mx-auto px-4 pb-60 pt-20">
      <div className="w-full md:w-2/3 md:max-w-full mx-auto">
        <div className="p-1">
          <h1 className="font-semibold text-4xl ">Znanja</h1>
        </div>
        <div className="p-3">

          {Znanja.knowledge?.map(zanje => {
            return (
              <div key={zanje.name}>
                <span className="icon-color">{zanje.name}</span>
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-200 absolute"></div>
                  <div className="h-full bg-color absolute" style={{ width: zanje.procent + '%' }}></div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <br />
      <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
      <br />
      <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 pt-5">
        <div className="p-1  bg-color">
          <h1 className="text-white font-semibold text-xl">Kaj najraje počnem? 🐻</h1>
        </div>
        <div className="bg-gray-100 p-3">
          <p className="opacity-80 icon-color font-sans p-3">
            Znanje je
          </p>
        </div>
      </div>
    </div>
  )
}

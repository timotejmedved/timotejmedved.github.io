import React from 'react'
import Link from 'next/link'
import Router from "next/router"
export default function Project({ project }) {


  function sendProps(){
    Router.push({
      pathname: "/projects/single",
      query: project
    })
  }


  return (
    <div className="flex overflow-hidden mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300    sm:flex-row flex-col">
      <div className="w-56 bg-cover flex-shrink-0" style={{ backgroundImage: 'url(' + project.image + ')' }}>
      </div>
      <div className=" w-full flex-grow">
        <h1 className="text-white bg-color font-semibold text-3xl p-1">{project.name}</h1>
        <div className="bg-gray-100 p-3">
          <p className="opacity-80 ">
            .pdf (v pripravi)
          </p>
          <div className="flex mt-2 item-center">
            <span>{project.year}</span>
          </div>
          <div className="  mt-3 r-3">
            {project.tags?.map(tag => {
              return (
                <>

                  <span className="text-lg font-bold text-gray-700  md:text-xl mr-3 border rounded-md p-1 bg-slate-200">{tag}</span>
                </>
              );
            })}
          </div>
          <div className="flex justify-between mt-3 item-center">
            <a onClick={() => sendProps()} >
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">Podrobnosti &rarr;</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
/*
<Link href={'/projects/' + project.id}>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">Podrobnosti &rarr;</button>
            </Link>
*/
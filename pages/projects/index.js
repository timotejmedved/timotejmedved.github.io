import React from 'react'
import Project from '../../components/Project'

import Projekti from '../../data/projects.json'

/*
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();

  //console.log(data);
  console.log(Projekti.projects[0]);
  
  return {
    props: {
      projects: data
    }
  }
}
*/



export default function Projects() {
  return (
    <div className="bg-white pb-20 pt-5 ">
      <section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl "></h1>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-5xl font-semibold text-gray-800 ">Projekti:</h1>
              <div className="mt-4 space-y-4 lg:mt-8">
                <div>
                  <h1 href="#" className="block font-semibold">Statistika:</h1>
                  <ul>
                    <li>- {Projekti.projects.length} projektov</li>
                  </ul>
                </div>


               

              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              {Projekti.projects?.map(project =>{
                return (
                  <>
                  <Project project={project} />
                  <hr className="my-8 border-gray-200 " />
                  </>
                );
              })}
            </div>
          </div>
          <p>Navedeni so le nekateri projekti.</p>
        </div>
        
      </section>
    </div>
  )
}

/**
 * 
 *  <div>
                  <h1 href="#" className="block font-semibold">Sortiraj:</h1>
                  <ul>
                    <li> <input type="checkbox" /> Python projects</li>
                    <li> <input type="checkbox" /> WPF C# projects</li>
                    <li> <input type="checkbox" /> Unity projects</li>
                    <li> <input type="checkbox" /> Flutter projects</li>
                    <li> <input type="checkbox" /> Spletne strani</li>
                  </ul>
                </div>
 */


/*
KOPIJA
export default function Projects({ projects }) {
  return (
    <div className="bg-white pb-20 pt-5 ">
      <section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl "></h1>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-5xl font-semibold text-gray-800 ">Projekti:</h1>
              <div className="mt-4 space-y-4 lg:mt-8">
                <div>
                  <h1 href="#" className="block font-semibold">Statistika:</h1>
                  <ul>
                    <li>- {projects.length} projektov</li>
                    <li>- 5 GitHub repozitorijev</li>
                  </ul>
                </div>

                <div>
                  <h1 href="#" className="block font-semibold">Sortiraj:</h1>
                  <ul>
                    <li> <input type="checkbox" /> Python projects</li>
                    <li> <input type="checkbox" /> WPF C# projects</li>
                    <li> <input type="checkbox" /> Unity projects</li>
                    <li> <input type="checkbox" /> Flutter projects</li>
                    <li> <input type="checkbox" /> Spletne strani</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              {projects?.map(project =>{
                return (
                  <>
                  <Project project={project} />
                  <hr className="my-8 border-gray-200 " />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
*/









/*

              <div className=" border-2 border-gray-200  p-8 flex sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex   bg-indigo-100  flex-shrink-0">

                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>

                </div>
              </div>


              <hr className="my-8 border-gray-200 " />
*/






/*
  <h1>Seznam projektov</h1>

      <ul>
        <li> Open source projects</li>
        <li> Closed source projects</li>
      </ul>


      <h1><b>Sortiraj</b></h1>

      <ul>
        <li> <input type="checkbox" /> Python projects</li>
        <li> <input type="checkbox" /> WPF C# projects</li>
        <li> <input type="checkbox" /> Unity projects</li>
        <li> <input type="checkbox" /> Flutter projects</li>
        <li> <input type="checkbox" /> Spletne strani</li>
      </ul>

      <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
          alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Odločitveno drevo</div>
          <p className="text-gray-700 text-base">
            Kratek opis.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="flex space-x-2 justify-start">
            <button
              className="shadow-lg shadow-green-500/50 py-2 px-3  text-s font-bold cursor-pointer tracking-wide rounded-full   border-green-300 border-2 hover:bg-green-300 hover:text-white transition ease-out duration-500">

              <span className="opacity-90">

                Podrobnosti &rarr;
              </span>

            </button>
          </div>
          <br />
        </div>
      </div>
*/


/*
  <div className="flex overflow-hidden mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="w-56 bg-cover " style={{ backgroundImage: 'url("https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>

                </div>

                <div className=" w-full ">

                  <h1 className="text-white bg-color font-semibold text-3xl p-1">Program za izvedbo frekvenčne analize</h1>

                  <div className="bg-gray-100 p-3">
                    <p className="opacity-80 ">
                      .pdf (v pripravi)


                    </p>
                    <div className="flex mt-2 item-center">
                      <span>2016</span>
                    </div>

                    <div className="  mt-3 r-3">
                      <span className="text-lg font-bold text-gray-700  md:text-xl mr-3">C#</span>
                      <span className="text-lg font-bold text-gray-700  md:text-xl mr-3">WPF</span>
                    </div>

                    <div className="flex justify-between mt-3 item-center">

                      <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">Prikaži več</button>
                    </div>
                  </div>

                </div>

              </div>

*/
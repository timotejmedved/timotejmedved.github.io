import React from 'react'
import Project from '../../components/Project'



export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();

  console.log(data);
  
  return {
    props: {
      projects: data
    }
  }
}




export default function Projects({ projects }) {
  return (
    <div class="bg-white pb-20 pt-5 ">

      <section class="bg-white ">
        <div class="container px-6 py-12 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-4xl "></h1>

          <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div class="lg:mx-12">

              <h1 class="text-5xl font-semibold text-gray-800 ">Projekti:</h1>

              <div class="mt-4 space-y-4 lg:mt-8">
                <div>
                  <h1 href="#" class="block font-semibold">Statistika:</h1>
                  <ul>
                    <li>- {projects.length} projektov</li>
                    <li>- 5 GitHub repozitorijev</li>
                  </ul>
                </div>



                <div>
                  <h1 href="#" class="block font-semibold">Sortiraj:</h1>



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

            <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">


              


              

             

              {projects?.map(project =>{
                return (
                  <>
                  <Project project={project} />
                  <hr class="my-8 border-gray-200 " />
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



/*

              <div class=" border-2 border-gray-200  p-8 flex sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex   bg-indigo-100  flex-shrink-0">

                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>

                </div>
              </div>


              <hr class="my-8 border-gray-200 " />
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

      <div class="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <img class="w-full" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
          alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Odločitveno drevo</div>
          <p class="text-gray-700 text-base">
            Kratek opis.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex space-x-2 justify-start">
            <button
              class="shadow-lg shadow-green-500/50 py-2 px-3  text-s font-bold cursor-pointer tracking-wide rounded-full   border-green-300 border-2 hover:bg-green-300 hover:text-white transition ease-out duration-500">

              <span class="opacity-90">

                Podrobnosti &rarr;
              </span>

            </button>
          </div>
          <br />
        </div>
      </div>
*/


/*
  <div class="flex overflow-hidden mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
                <div class="w-56 bg-cover " style={{ backgroundImage: 'url("https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>

                </div>

                <div class=" w-full ">

                  <h1 class="text-white bg-color font-semibold text-3xl p-1">Program za izvedbo frekvenčne analize</h1>

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

                      <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">Prikaži več</button>
                    </div>
                  </div>

                </div>

              </div>

*/
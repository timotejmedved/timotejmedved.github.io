import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div class="relative pb-32 flex content-center items-center justify-center" style={{ minHeight: 100 + 'vh' }}>
        <div class="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg")' }}>
          <span id="blackOverlay" class="w-full h-full absolute opacity-40 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>

                <div class="pb-5 flex content-center items-center justify-center">
                  <img class="rounded-full border-4 border-gray-500" src="https://pbs.twimg.com/profile_images/1148531699594289152/yOVo8B3G_400x400.jpg" />
                </div>
                <div>
                  <h1 class="text-white text-center font-semibold text-5xl">Timotej Medved</h1>

                  <br />



                  <Link href="/about">
                    <a class="text-white text-center lg:hover:text-color font-bold" href="index.html">Več o meni &rarr;</a>
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
          <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style={{ maxWidth : 500 + 'px'}}>
            <div class="w-full pt-1 pb-5">
              <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
              </div>
            </div>
            <div class="w-full mb-10">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
              <p class="text-sm text-gray-600 text-center px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">Scott Windon</p>
              <p class="text-xs text-gray-500 text-center">@scott.windon</p>
            </div>
          </div>
        </div>
        "What if it dosen't work out?"
        "What if it does?!"
      </div>




    </div>
  )
}
/*


       <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style={{minHeight: 40 + 'vh'}}>
            <div class="absolute top-0 w-full h-full bg-center bg-cover"
                style={{ 
                  backgroundImage: 'url("https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg")'
                }}
                >
                <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div class="pr-12">
                            <h1 class="text-white font-semibold text-5xl">
                                Timotej Medved
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{height: 70 + 'px'}}>
            </div>
        </div>

*/
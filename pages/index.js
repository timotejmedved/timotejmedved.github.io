import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="relative pb-32 flex content-center items-center justify-center" style={{ minHeight: 100 + 'vh' }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg")' }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <div className="pb-5 flex content-center items-center justify-center">
                  <Image width={400} height={400} alt="Timotej Medved" className="rounded-full border-4 border-gray-500" src="https://avatars.githubusercontent.com/u/17954677?v=4" />
                </div>
                <div>
                  <h1 className="text-white text-center font-semibold text-5xl">Timotej Medved</h1>
                  <br />
                  <Link href="/about">
                    <a className="text-white text-center lg:hover:text-color font-bold" href="index.html">Več o meni &rarr;</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}
/*


       <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{minHeight: 40 + 'vh'}}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{ 
                  backgroundImage: 'url("https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg")'
                }}
                >
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                                Timotej Medved
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{height: 70 + 'px'}}>
            </div>
        </div>

*/
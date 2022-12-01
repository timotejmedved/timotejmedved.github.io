import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className="container mx-auto px-4 pb-60 pt-20">

      <div className="w-full md:w-2/3 md:max-w-full mx-auto">
        <div className="p-1">
          <h1 className="font-semibold text-4xl ">O meni</h1>
        </div>
        <div className="p-3">
          <p className="opacity-80 icon-color font-sans">
            Sem Timotej Medved star sem 21 let in živim v kraju Mihovce, Občina Kidričevo.
          </p>
        </div>
      </div>

      <br />
      <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
      <br />

      <div className="w-full md:w-2/3 md:max-w-full mx-auto">
        <div className="p-1">
          <h1 className="font-semibold text-4xl ">Izobraževanje</h1>
        </div>
        <div className="p-3">
          <ul className="list-disc opacity-80 p-3 icon-color font-semibold">
            <li>Osnovna šola Cirkovce</li>
            <li>ŠC Ptuj, Elektro in računalniška šola (2016 - 2020)</li>
            <li>Univerza v Mariboru - Fakulteta za elektrotehniko, računalništvo in informatiko (2020 - danes)</li>
          </ul>
        </div>
      </div>

      <br />
      <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
      <br />

      <div className="w-full md:w-2/3 md:max-w-full mx-auto">
        <div className="p-1">
          <h1 className="font-semibold text-4xl ">Erasmus+</h1>
        </div>

        <div className="p-3">
          <p className="opacity-80 icon-color font-sans">
            V letu 2019 sem sodeloval v projektu Erasmus+ z naslovom <span className="font-bold">&quot; Smo mladi, smo radovedni - Evropa prihajamo! &quot;</span>. V okviru projekta sem tri tedne opravljal prakso na Poljskem v mestu Vroclav (Wrocław). Prakso sem opravljal v podjetju Nexwell Engineering.
          </p>
          <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 pt-5">
            <div className="p-1  bg-color">
              <h1 className="text-white font-semibold text-xl">Dnevnik Wrocław</h1>
            </div>
            <div className="bg-gray-100 p-3">
              <p className="opacity-80 icon-color font-sans p-3">Več o moji izkušnji na Erasmus+ si lahko prebereš v mojem dnevniku, ki je nastal v času bivanja na Poljskem.
                <br /><br />
                <a className="text-gray-700 hover:text-color font-semibold block pb-2 text-sm" href="#">Dnevnik Wrocław (.pdf)</a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap pt-5">

            <div className="h-64 w-96 relative">

              <Image alt="erasmus logo" src="https://cufar.si/files/2015/03/erasmus-logo1.png" className="p-3 rounded-sm" layout='fill' />
            </div>

            <div className="h-64 w-96 relative">

              <Image alt="wroclav" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7a/6a/7f.jpg" className="p-3 rounded-sm" layout='fill' />
            </div>

          </div>
        </div>
      </div>
      <br />
      <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
      <br />
      <div className="w-full md:w-2/3 md:max-w-full mx-auto">
        <div className="p-1">
          <h1 className="font-semibold text-4xl uppercase">V medijih</h1>
        </div>
        <div className="p-3">
          <h3 className="icon-color text-xl pb-1">ŠTAJERSKI TEDNIK</h3>
          <p className="opacity-80 icon-color font-sans">
            Elektro Maribor je že deveto leto zapored podelil nagrade za odlične dosežke v izobraževanju najboljšim dijakom srednjih elektro šol na svojem oskrbnem območju. Letošnji najboljši dijaki Elektro in računalniške šole Šolskega centra Ptuj so: Niko Križnik (zlati znak odličnosti, nagrada 300 evrov), Timotej Medved (srebrni znak odličnosti, nagrada 200 evrov) in Dominik Bigec (bronasti znak odličnosti, nagrada 100 evrov).
            <br /><a className="hover:text-color underline" rel="noreferrer" target="_blank" href="https://www.tednik.si/druzba/21581-niko-timotej-in-dominik-dijaki-z-jasno-vizijo-svoje-prihodnosti">ŠTAJERSKI TEDNIK</a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 pt-5">
        <div className="p-1  bg-color">
          <h1 className="text-white font-semibold text-xl">Izsek iz članka</h1>
        </div>
        <div className="bg-gray-100 p-3">
          <p className="opacity-80 icon-color font-sans p-3">
            ... Sošolci iz srednje Elektro in računalniške šole Ptuj se ga bodo spominjali kot tistega, ki jim je bil vedno pripravljen pomagati tako na strokovnem kot tudi drugih področjih. ...
            <br /><br />
            ... Srebrni znak odličnosti in nagrada mu pomenita veliko. <span className="font-semibold">&quot; To je priznanje, da si vsa štiri leta delal dobro, da si pridobil določeno znanje, da so to opazili drugi, &quot;</span> je povedal Timotej, ki se še kako zaveda, da se za vsakim uspehom skriva trdo delo. Kot kmečki sin se tega še veliko bolj zaveda. ...
          </p>
        </div>
      </div>

      <br />
      <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
      <br />

      <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="p-1  bg-color">
          <h1 className="text-white font-semibold text-xl">Ostale informacije</h1>
        </div>
        <div className="bg-gray-100  p-3 icon-color font-semibold">
          <ul className="list-disc p-3">
            <li>2015-2016 predsednik razreda (OŠ Cirkovce, 9. razred)</li>
            <li>2016-2017 podpredsednik razreda (ERŠ Ptuj, 1. letnik)</li>
            <li>2019-2020 predsednik razreda (ERŠ Ptuj, 4. letnik)</li>
            <li>2019-2020 predsednik dijaške skupnosti ERŠ Ptuj</li>
            <li>2019-2020 poslanec DOS (Dijaška organizacija Slovenije)</li>
            <li>2020-2021 predstavnik prvega letnika ITK (VS) - FERI</li>
            <li>2021-2022 predstavnik drugega letnika ITK (VS) - FERI</li>
            <li>2022-2023 predstavnik tretjega letnika ITK (VS) - FERI</li>
          </ul>
        </div>
      </div>
      <br /><br />
    </div>
  )
}

/*
 <div>

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{minHeight: 40+'vh'}}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/7896029/pexels-photo-7896029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  O meni
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{height: 70 + 'px'}}>
        </div>
      </div>


      <h1>About</h1>
      <p>This is the about page</p>


      <h1>Izobraževanje</h1>
      <p>Izobraževanje našteto</p>



    </div>
*/ 
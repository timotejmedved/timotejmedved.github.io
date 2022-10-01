import React from 'react'

export default function Acknowledgment() {
    return (
        <div className="container mx-auto px-4 pb-60 pt-20">
            <div className="w-full md:w-2/3 md:max-w-full mx-auto">
                <div className="p-1">
                    <h1 className="font-semibold text-4xl ">Priznanja</h1>
                </div>
                <div className="p-3">
                <ul className="list-disc opacity-80 p-3 icon-color font-semibold">
                        <li className="hover:text-color"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=CSMS8Q_81HQ">2019 - BALIRANJE - 3. MESTO NA DRŽAVNEM SREDNJEŠOLSKEM ACM TEKMOVANJU &rarr; Prikaži več</a></li>
                        <li className="hover:text-color"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=FocYZhD_FY4">2020 - Naš vsakdanji kruh. 1. MESTO NA DRŽAVNEM SREDNJEŠOLSKEM ACM TEKMOVANJU &rarr; Prikaži več</a></li>
                        <li className="hover:text-color"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=s9O8-vawl_g">2020 - Zrno na zrno pogača. 2. MESTO NA DRŽAVNEM SREDNJEŠOLSKEM ACM TEKMOVANJU &rarr; Prikaži več</a></li>
                        <li className="hover:text-color"><a rel="noreferrer" target="_blank" href="#">2020 - Srebrni znak odličnosti (Elektro Maribor d.d.) &rarr; Prikaži več</a></li>
                        <li className="hover:text-color text-xl"><a rel="noreferrer" target="_blank" href="#">2021 - FERI - Priznanje dekana za uvrstitev med 5% najboljših študentov 1. letnika &rarr; Prikaži več</a></li>
                    </ul>
                </div>
            </div>

            <br />
            <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90"/>
            <br />

            <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="p-1  bg-color">
                    <h1 className="text-white font-semibold text-xl">Sodelovanje v projektih</h1>
                </div>
                <div className="bg-gray-100 p-3">
                    <ul className="list-disc opacity-80 p-3">
                        <li>Mednarodni festival sodobnih umetnosti Pixellpoint. Projekt - Droni med nami</li>
                        <li>Mednarodni festival Speculum Artium. Projekt - Predstavitev in uporaba dronov dandanes</li>
                    </ul>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

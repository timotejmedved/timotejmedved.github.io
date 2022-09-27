import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer class="relative  pt-8 pb-6 bg-footer">

            <div class="container mx-auto px-4">
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-2xl font-semibold">“Be yourself; everyone else is already taken.” - Oscar Wilde</h4>
                        <h5 class="text-lg mt-0 mb-2 text-gray-700">

                        </h5>
                        <div class="mt-6">

                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Uporabne
                                    povezave</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link href="/contact">
                                            <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Kontakt</a>
                                        </Link>

                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-400" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-600 font-semibold py-1">
                            Vse pravice pridržane © 2022 Timotej Medved<br />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

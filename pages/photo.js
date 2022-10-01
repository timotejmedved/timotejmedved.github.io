import React from 'react'
import Image from 'next/image'

export default function Photo() {
    return (
        <div className="container mx-auto px-4 pb-60 pt-20">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7900716/pexels-photo-7900716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
                <h1 className="mix-blend-lighten font-bold text-black bg-white md:text-9xl sm:text-5xl uppercase">Galerija</h1>
            </div>
            <div className="container mx-auto px-4">

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="hidden md:block md:w-1/2 px-4">
                            <div className="h-full w-full bg-cover rounded shadow-md animacija" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7900704/pexels-photo-7900704.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load")' }} ></div>
                        </div>
                        <div className="md:w-1/2 h-auto px-4">
                            <div className="mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896360/pexels-photo-7896360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                            <div><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896524/pexels-photo-7896524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        </div>
                    </div>
                </section>

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896371/pexels-photo-7896371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896088/pexels-photo-7896088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                    </div>
                </section>

                <section className="pt-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896522/pexels-photo-7896522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7899556/pexels-photo-7899556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896299/pexels-photo-7896299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896131/pexels-photo-7896131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896294/pexels-photo-7896294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7900706/pexels-photo-7900706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                    </div>
                </section>

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4 -mb-8">
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896374/pexels-photo-7896374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896372/pexels-photo-7896372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896376/pexels-photo-7896376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896365/pexels-photo-7896365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896363/pexels-photo-7896363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896359/pexels-photo-7896359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896084/pexels-photo-7896084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md animacija" width={1260} height={750} src="https://images.pexels.com/photos/7896082/pexels-photo-7896082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                    </div>
                </section>
            </div>

            <br />
            <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
            <br />

            <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="p-1  bg-color">
                    <h1 className="text-white font-semibold text-2xl">Če si želiš ogledati še več mojih fotografij obišči:</h1>
                </div>
                <div className="bg-gray-100 p-1">
                    <p className="opacity-80 p-3">
                        <ul className="list-disc opacity-80 p-3 icon-color font-semibold">
                            <li><a rel="noreferrer" target="_blank" href="https://www.pexels.com/@timotej-medved-57402524/" className="pr-5  icon-color hover:text-color">Pexel</a></li>
                            <li><a rel="noreferrer" href="https://www.instagram.com/timimedved/" target="_blank" className="pr-5  icon-color hover:text-color">Instagram</a></li>
                        </ul>
                    </p>
                    <div className="opacity-80 p-3">
                        <div className="flex flex-wrap pt-1">
                            <a rel="noreferrer" href="https://www.instagram.com/timimedved/" target="_blank" className="pr-5 text-2xl icon-color hover:text-color"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'

/*
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/projects');
    const data = await res.json();

    const paths = data.map(project => ({
        params: { id: project.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/projects/' + id);
    const data = await res.json();

    return {
        props: {
            project: data
        }
    }
}
*/
export default function Project({ project }) {
    return (
        <div className="container mx-auto px-4 pb-60 pt-20">
            
   
        </div>
    )
}
/*
 return (
        <div className="container mx-auto px-4 pb-60 pt-20">
            
            <div className="w-full md:w-2/3 md:max-w-full mx-auto">
                <div className="p-1">
                    <h1 className="font-semibold text-4xl ">{project.name}</h1>
                    <div className="  mt-3 r-3">
                        {project.tags?.map(tag => {
                            return (
                                <span key={tag} className="text-lg font-bold text-gray-700  md:text-xl mr-3">{tag}</span>
                            );
                        })}
                    </div>
                    <h1 className="font-semibold text-1xl">Leto: {project.start_date}</h1>

                    {project.url != '' &&(
                        <h1 className="font-semibold text-1xl">Povezava: <a classNameName='hover:underline' href={project.url} target="blank">{project.url}</a> </h1>
                    )}
                    
                </div>
                <div className="p-3">
                </div>
            </div>

            <br />
            <hr className="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
            <br />

            <div className="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl ">
                <div className="p-1  bg-color">
                    <h1 className="text-white font-semibold text-xl">OPIS</h1>
                </div>
                <div className="bg-gray-100 p-3">
                    <h5 className="text-2xl font-semibold">{project.short_description}</h5>
                    <p className="opacity-80 mt-2">
                        {project.long_description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-60 pt-20">
                <div className="container mx-auto px-4">
                    <section className="py-8 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {project.gallery?.map(image => {
                                return (
                                    <div key={image} className="md:w-1/2 px-4 mb-8 md:mb-0 p-4"><Image className="rounded shadow-md animacija" src={image} alt="" /></div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <br /><br />
        </div>
    )
*/
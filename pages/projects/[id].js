import React from 'react'



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

export default function Project({ project }) {
    return (

        <div class="container mx-auto px-4 pb-60 pt-20">










            <div class="w-full md:w-2/3 md:max-w-full mx-auto">
                <div class="p-1">
                    <h1 class="font-semibold text-4xl ">{project.name}</h1>

                    <div class="  mt-3 r-3">
                        {project.tags?.map(tag => {
                            return (
                                <span class="text-lg font-bold text-gray-700  md:text-xl mr-3">{tag}</span>
                            );
                        })}
                    </div>
                    <h1 class="font-semibold text-1xl">Leto: {project.start_date}</h1>

                </div>
                <div class="p-3">






                </div>
            </div>


            <br />
            <hr class="w-full md:w-2/3 md:max-w-full mx-auto opacity-90" />
            <br />

            <div class="w-full md:w-2/3 md:max-w-full mx-auto shadow-xl ">
                <div class="p-1  bg-color">
                    <h1 class="text-white font-semibold text-xl">OPIS</h1>
                </div>
                <div class="bg-gray-100 p-3">
                    <h5 class="text-2xl font-semibold">{project.short_description}</h5>
                    <p class="opacity-80 mt-2">
                        {project.long_description}
                    </p>


                </div>
            </div>

            <div class="container mx-auto px-4 pb-60 pt-20">
                <div class="container mx-auto px-4">
                    <section class="py-8 px-4">
                        <div class="flex flex-wrap -mx-4">
                            {project.gallery?.map(image => {
                                return (
                                    <div class="md:w-1/2 px-4 mb-8 md:mb-0 p-4"><img class="rounded shadow-md animacija" src={image} alt="" /></div>
                                );
                            })}
                        </div>
                    </section>
                </div>

            </div>

            <br /><br />


        </div>



    )
}

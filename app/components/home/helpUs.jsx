import dataHome from "@/data/homeData.json"
import Link from "next/link"


export function HelpUs({ data }) {


    return (
        <section className="w-full  min-h-[45vh] my-[5vh] bg-[#18559A]">
            <div className="container mx-auto">
                <div className="w-full flex justify-center pt-10">
                    <h1 className="text-5xl font-bold text-white">{data.title}</h1>
                </div>
                <div className="w-full flex flex-wrap justify-center mt-10">
                    {data.options.map((element, index) => (
                        <div className="w-1/3 text-center text-white px-5" key={index}>
                            <h1 className="text-3xl font-bold">
                                {element.title}
                            </h1>
                            <p className="h-[10vh]">
                                {element.description}
                            </p>
                            <div className="pt-4">
                                <Link href={element.link} className="border py-3 px-10 rounded hover:bg-[#164377] hover:border-white hover:text-white bg-white text-black">
                                    {element.textButton}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
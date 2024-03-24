import dataHome from "@/data/homeData.json"
import { Slider } from "./slider"


export function AboutHome({ data }) {
    return (
        <section className="w-full container mx-auto min-h-[60vh] py-[5vh]">
            <div className="w-full flex justify-center pt-10">
                <h1 className="text-5xl font-bold">{data.title}</h1>
            </div>
            <div className="flex  mt-10">
                <div className="w-1/2">
                    <Slider images={data.carrousel} />
                </div>
                <div className="w-1/2">
                    <div className="w-full h-full flex items-center justify-center text-center">
                        <p className="px-10 text-2xl">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client"

import dataHome from "@/data/homeData.json"
import donarLink from "@/data/donarLinkData.json"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"
import { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types"

export const HeaderHome = (props: { data: HomeQuery , variables: HomeQueryVariables, query: string }) => {
    const { link } = donarLink
    const { data } = useTina({
        data: props.data,
        query: props.query,
        variables: props.variables
    })
    const imgPath: string | undefined = data.Home.header?.img ?? undefined;
    return (
        <section className="w-full min-h-[85vh]">
            <div className="flex h-[85vh]">
                <div className="w-1/2 ms-[10vh] me-[2vh] flex justify-center items-center h-full">
                    <div className="flex flex-wrap md:max-w-[80%]">
                        <h1 className="text-7xl uppercase font-bold">{data.Home.header?.title}</h1>
                        <p className="text-xl mt-5">{data.Home.header?.description}</p>
                        <Link href={link} target="_blank" className="mt-7 bg-[#22A300] text-white border font-bold px-6 py-3 rounded-xl hover:bg-[#45b327]">
                            Doná ahora
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 me-[2vh] h-full  ">
                    <div className="h-full overflow-hidden flex justify-center items-center">
                    {imgPath !== null && imgPath !== undefined && (
                        <img src={imgPath} alt="Imagen header Data home" className="w-full brightness-75 rounded-3xl" />
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}
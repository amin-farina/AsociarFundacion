"use client"
import dataHome from "@/data/homeData.json"
import Slider from "react-slick";
import React from "react";
import "@/app/globals.css"

export function Alianzas({ data }) {
    const listaEmpresas = dataHome.alianzas.companies
    const sections = [
        listaEmpresas.slice(0, 7),
        listaEmpresas.slice(7, 13),
        listaEmpresas.slice(13, 20),
        listaEmpresas.slice(20, 26),
        listaEmpresas.slice(26, 34)
    ];
    const startTimes = [1000, 1100, 1200, 1300, 1400];
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1400,
        cssEase: "linear",
        variableWidth: true
    };

    return (
        <section className="w-full container mx-auto min-h-[60vh] py-[5vh]">
            <div className="w-full flex flex-wrap text-center justify-center pt-5 pb-5">
                <h1 className="text-5xl font-bold w-full">{data.title}</h1>
                <p className="w-full pt-5">{data.description}</p>
                <p className="pt-5 font-bold">{data.descriptionBold}</p>
            </div>
            <div className="w-full flex flex-wrap justify-center">
                {sections.map((lista, index) => (
                    <div key={index} className="slider-container w-2/3">
                        <Slider {...settings} autoplaySpeed={0 + startTimes[index]}>
                            {lista.map((elemento, i) => (
                                <div key={i} className="px-2 overflow-hidden w-auto h-[10vh]">
                                    <img src={elemento.imgPath} alt={elemento.imgAlt} className="px-4 h-full imgLogos  " />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </section>
    )
}
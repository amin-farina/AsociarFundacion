'use client'

import navbarData from "@/data/navbarData.json"
import donarLink from "@/data/donarLinkData.json"
import redesData from "@/data/redesData.json"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
    const { link } = donarLink
    const { logoPath } = navbarData
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`w-full fixed bg-white z-50 h-[10vh] navbar transition-all ${isScrolled ? 'shadow-xl' : 'md:mt-5'}`}>
            <div className="w-full px-[5vw] flex justify-between bg-white relative">
                <div className="w-1/2 h-[10vh]">
                    <div className="flex h-full items-center">
                        <Link href="" className="max-md:py-2 h-full flex items-center">
                            <img src={logoPath} alt="Logo asociar" className="h-full md:py-2 " />
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-[10vh] hidden md:flex"> {/* Oculta el botón de menú en pantallas pequeñas */}
                    <div className="w-full h-full flex justify-end items-center">
                        {navbarData.links.map((link, index) => (
                            <li key={index} className="flex">
                                <Link href={link.url} className="px-3 hover:text-blue-800 font-bold">
                                    <h1>{link.title}</h1>
                                </Link>
                            </li>
                        ))}
                        <Link href={link} target="_blank" className="bg-[#18559A] border border-[#18559a] text-white hover:text-black font-bold px-4 py-2 rounded-xl hover:border hover:border-[#18559A] hover:bg-[#A8B0BA]">
                            Donar Ahora
                        </Link>
                    </div>
                </div>
                <div className={`top-[-1.25rem] right-0 w-full max-md:hidden absolute transition-all  ${isScrolled ? "hidden" : ""} `}>
                    <ul className="flex justify-end pe-[5vw]">
                        {redesData.links.map((red, index) => (
                            <li className={`h-full border px-3 ${red.color} rounded-b-lg`} key={index}>
                                <Link href={red.link}>
                                    <i className={`font-extrabold px-1 ${red.classIcon}  text-lg `} ></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:hidden flex justify-end"> {/* Muestra el botón de menú en pantallas pequeñas */}
                    <button onClick={toggleMenu} className="block">
                        {/* Ícono del menú */}
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="w-full bg-white md:hidden">
                    <ul className="flex flex-col items-center py-4">
                        {/* Renderizar los enlaces del menú */}
                        {navbarData.links.map((link, index) => (
                            <li key={index} className="py-2">
                                <Link href={link.url} className="hover:text-blue-800 font-bold">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        <li className="py-2">
                            <Link href={link} target="_blank" className="bg-[#18559A] text-white hover:text-black font-bold px-4 py-2 rounded-xl hover:border hover:border-[#18559A] hover:bg-[#A8B0BA]">
                                Donar Ahora
                            </Link>
                        </li>
                    </ul>
                    {/* Renderizar los enlaces de redes sociales */}
                    <ul className="flex justify-center pb-4">
                        {redesData.links.map((red, index) => (
                            <li className={`border px-3 ${red.color} md:rounded-full max-md:rounded`} key={index}>
                                <Link href={red.link}>
                                    <i className={`px-1 ${red.classIcon} text-lg`} ></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
} 
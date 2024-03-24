import Image from "next/image";
import {HeaderHome} from "./components/home/header"
import {NovedadesHome} from "./components/home/novedades"
import {AboutHome} from "./components/home/about"
import {HelpUs} from "./components/home/helpUs"
import {Alianzas} from "./components/home/alianzas"
import client from "@/tina/__generated__/client";

export const revalidate:number = 1;

export default async function Home() {
  const resHeader = await client.queries.Home({relativePath: "/home.json" })
  console.log(resHeader.data.Home.alianzas)
  return (
    <section className="w-full md:pt-[8vh] max-md:pt[11vh]">
      <HeaderHome data={resHeader.data} query={resHeader.query} variables={resHeader.variables} />
      <NovedadesHome />
      <AboutHome data={resHeader.data.Home.about} />
      <HelpUs data={resHeader.data.Home.helpUs}/>
      <Alianzas data={resHeader.data.Home.alianzas} />
    </section>
  );
}

export function NovedadesHome() {
    const publicaciones = [
        {
            "title": "Campaña #YOXVOS",
            "description": "Estuvimos en el barrio Uruguay realizando junto a @asoc.abriguitos el operativo número 62.",
            "img": "https://asociar.org/wp-content/uploads/2021/04/photo-2021-04-24-15-26-36-768x1024.jpg"
        },
        {
            "title": "Cada vez somos más",
            "description": "Hoy, en nuestro operativo número 61, estuvimos junto a @cooprativalajuanita reafirmando nuestro compromiso con los que más lo necesitan.",
            "img": "https://asociar.org/wp-content/uploads/2021/04/photo-2021-04-16-13-57-33-766x1024.jpg"
        },
        {
            "title": "Cumpliendo sueños y promesas",
            "description": "Inauguramos la obra de ampliación del Centro Cultural Almirante Brown, un espacio de contención para los chicos y chicas que viven en El Barrio La Garrote, Tigre.",
            "img": "https://asociar.org/wp-content/uploads/2021/04/whatsapp-image-2021-04-27-at-17.00.46.jpeg"
        }
    ]
    return (
        <section className="w-full min-h-[85vh] mt-[5vh] bg-[#ececec]">
            <div className="mx-auto container">
                <div className="w-full flex justify-center pt-10">
                    <h1 className="text-5xl font-bold">Novedades</h1>
                </div>
                <div className="w-full flex flex-wrap justify-center mt-10">
                    {publicaciones.map((evento, index) => (
                        <div key={index} className="group w-1/3 px-3 h-[60vh] rounded-2xl py-4 flex border border-transparent hover:border-[#fff] hover:bg-[#fff] flex-wrap justify-center space-y-2 hover:border">
                            <div className="h-[70%] overflow-hidden flex justify-center items-start ">
                                <img src={evento.img} alt={evento.title} className="rounded group-hover:brightness-75 " />
                            </div>
                            <div className="h-[20%] pt-3">
                                <h1 className="text-xl font-bold">{evento.title}</h1>
                                <p className="text-md ">{evento.description}</p>
                            </div>
                            <div className="h-[10%]">
                                <button className="bg-[#18559A] hover:bg-[#162f49] text-white px-7 py-2 rounded-xl">Leer mas</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import "@/app/globals.css"

export function Slider({ images }) {
    return (
        <section className="sliderClass">
            <div className="flex h-auto animate-slide ">
                {
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image.imgPath}
                            alt={image.imgAlt}
                            className="h-full max-h-[50vh] w-[100%]"
                        />
                    ))
                }
            </div>
        </section>
    )
}
import Image from "next/image"

export default function proyecto() {
    return (
        <>
            <div>
                <Image src="/imagenes/proyecto.webp" alt=""
                    height={300}
                    width={1400}
                ></Image>
            </div>
            <br /><br /><br />
            <div className=' '>
                <h1 className=" bg-cyan-500 text-6xl w-auto text-center font-bold">Proyecto GC</h1>
                <p className="text-2xl">Los niños asisten a contra turno escolar en nuestro predio de González Catán cada semana. El proyecto GC realiza un programa educativo con actividades simultáneas como educación física, apoyo escolar, recreación con talleres de arte, música e idiomas. Los niños también participan de una merienda saludable. Las actividades están diseñadas para estimular, enseñar y entrenar las capacidades cognitivas, las relaciones de compañerismo con otros y el desarrollo físico.</p>
            </div>
            <br /><br /><br />
            <div>
                <h1 className="bg-cyan-500 text-4xl w-auto text-center">El cerebro no es un vaso por llenar, sino una lámpara por encender.</h1>
            </div>
            <br /><br />
            <div className="flex items-center">
                <Image src="/imagenes/levantandomanos.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
                <div>
                    <h1 className="font-bold uppercase text-5xl text-center">Objetivos</h1>
                    <p>Para lograr nuestro objetivo de proveer oportunidades para el desarrollo integral de los niños y adolescentes, Los proyectos de GC se basan en tres ejes:

                    </p>
                    <div className="conteiner flex justify-between ">
                        <Image src="/imagenes/crecimiento.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                        <Image src="/compañerismo.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                        <Image src="/wireframe-06.544b4887.svg" alt=""
                            height={200}
                            width={200}
                        ></Image>
                    </div>
                </div>

            </div>
            <br /><br /><br />
            <p className="text-2xl bg-cyan-500">A través de nuestro programa educativo desarrollamos actividades que proveen oportunidades para lograr que los niños tengan buen crecimiento físico a través del deporte y la alimentación balanceada; para ayudar el desarrollo del conocimiento tienen apoyo pedagógico con enfoque en lenguas y matemáticas; y en lo relacional con talleres de arte, música e idiomas.</p>

        </>

    )
}
import Image from "next/image"

export default function actividades() {
    return (
        <>
            <div>
                <Image src="/imagenes/actividadesfoto.webp" alt=""
                    height={300}
                    width={1400}
                ></Image>
            </div>
            <br /><br /><br />
            <div className="flex items-center">
                <Image src="/imagenes/actividad1.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
                <div>
                    <h1 className="font-bold uppercase text-5xl text-center">Actividad
                        pedagógica</h1>
                    <p>Creemos que la educación es el medio para que cada persona alcance su máximo potencial. Por eso en GC trabajamos para ayudar a que cada niño, niña y adolescente pueda adquirir herramientas para lograr la alfabetización y comprensión lectora en el área de lengua y el razonamiento a través de las matemáticas. Buscamos lograr estos objetivos a través de materiales didácticos diseñados pedagógicamente con estándares de calidad. Además aprenden lenguaje de señas Argentina como un nuevo idioma, buscando la estimulación de la creatividad, la expresión y la inclusión.

                    </p>

                </div>

            </div>
            <br /><br /><br />
            <div className="container flex">
            <Image src="/imagenes/actividad2.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
                <Image src="/imagenes/actividad3.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
                <Image src="/imagenes/actividad4.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
            </div>
            <br /><br /><br />
            <div className="flex items-center">
                <Image src="/imagenes/actividad5.webp" alt=""
                    height={300}
                    width={400}
                ></Image>
                <div>
                    <h1 className="font-bold uppercase text-5xl text-center">Deporte y Recreacion
                        </h1>
                    <p>El deporte es una de las mejores escuelas de vida y tienen el poder de transformar conductas negativas en positivas. Es el medio por el cual podemos estimular, enseñar y entrenar valores tales como la lealtad y la cooperación, logrando objetivos en equipo y a la vez desarrollando la creatividad, la organización, la responsabilidad y la sana competencia. Por eso en GC cada día practicamos 40 minutos al deporte y la recreación.

                    </p>

                </div>

            </div>
            <br /><br /><br />

        </>

    )
}

import Image from "next/image"
export default function quienessomos() {
    return (
        <>
            <div className=" flex container relative">
                <Image src="/imagenes/quienessomos.webp" alt=""
                    height={300}
                    width={1400}
                ></Image>
                <div className="absolute text-center  border-b-blue-950 text-4xl text-bold animate-bounce bg-sky-500">
                    <h1>Misión
                        promover el desarrollo integral de los niños, niñas y adolescentes a través de la educación donde trabajamos</h1>
                </div>

            </div>
            <br />
            <br />
            <div className="flex justify-center text-4xl">
                <Image src="/gc.890707a6.png" alt=""
                    height={100}
                    width={100}
                ></Image>

                <h1 className="bg-cyan-500">Nuestros Valores</h1>
                <Image src="/gc.890707a6.png" alt=""
                    height={100}
                    width={100}
                ></Image>
            </div>
            <br />
            <br />
           <div className="grid grid-cols-3 gap-3 text-center">
               <div className="">
                   <h1 className="bg-cyan-500  text-4xl">Educación</h1>
                   <p>Es la herramienta que permite a las personas, alcanzar su máximo potencial.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Excelencia</h1>
                   <p>Emprendemos nuestros proyectos con este principio como base, ofreciendo actividades de calidad. Ellos merecen más que algo bueno, merecen lo mejor.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Transparencia</h1>
                   <p>Ponemos a disposición de nuestros colaboradores toda la información necesaria sobre los recursos utilizados en nuestros proyectos.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Empatía</h1>
                   <p>Cada persona es única y merece la mirada apreciativa que los hace dignos como seres humanos. Nuestro equipo interdisciplinario atiende las necesidades, tanto emocionales, físicas, cognitivas.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Equidad</h1>
                   <p>Todos tienen el derecho de que se les garanticen los accesos para satisfacer sus necesidades básicas.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Profesionalismo</h1>
                   <p>Contamos con un equipo de trabajo interdisciplinario que aborda todas las problemáticas desde diferentes enfoques para cumplir con nuestra misión.</p>
               </div>
               <div>
                   <h1 className="bg-cyan-500  text-4xl">Desarrollo integral</h1>
                   <p>Trabajamos para promover y proveer las oportunidades necesarias para garantizar el crecimiento, el conocimiento y el compañerismo de todos</p>
               </div>


           </div>

            </>






            )
}
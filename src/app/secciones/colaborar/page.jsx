import Image from "next/image"
export default function colaborar () {
    return (
        <>
         <div className='flex container relative'>
                <Image src="/imagenes/donar.webp" alt=""
                    height={500}
                    width={1400}
                ></Image>
                <div className=" absolute text-center  border-b-blue-950 text-4xl text-bold animate-bounce bg-sky-500 ">
                    <h1 >Colabora con nosotros</h1>
                </div>
            </div>
            <br /><br /><br />
            <div className='text-6xl grid justify-items-center font-bold'>
                <h1>¡Apoya a Proyecto GC y cambia vidas!</h1>
            </div>
            <br /><br /><br />
        </>
    )
}
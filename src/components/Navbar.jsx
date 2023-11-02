import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className=" bg-sky-500 font-bold lg: text-white flex  justify-around ">

                <Image src="/logomenu.png" alt="logomenu"
                    height={60}
                    width={60}
                ></Image>
                <Link href="/">Home</Link>

                <Link href="/secciones/quienessomos">Quines Somos</Link>



                <Link href="/secciones/proyecto">Proyecto</Link>



                <Link href="/secciones/actividades">Actividades</Link>



                <Link href="/secciones/colaborar">Colaborar</Link>



                <Link href="/secciones/inscripciones">Inscribite</Link>
                <Image src="/logomenu.png" alt="logomenu"
                    height={60}
                    width={60}
                ></Image>

            </nav>
            <footer />
        </>




    )
}
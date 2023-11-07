import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {

    const clientesinscriptos = await prisma.inscriptos.findMany()
    console.log(clientesinscriptos)
    return NextResponse.json(clientesinscriptos)
}

export async function POST(request) {
    const {pnombre, snombre, correo, comentario} = await request.json();
     
    const ncliente= await prisma.inscriptos.create({
        data: {
            pnombre,
            snombre,
            correo,
            comentario,
        }
     })
    return NextResponse.json(ncliente)
}


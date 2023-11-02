import { NextResponse } from "next/server";
import prisma, { Prisma } from "@/libs/prisma";



export async function POST(request) {
    try {
        const data = await request.json()
         const resultado = await prisma.subscriptores.create(({
        data:data
    }))
    return new NextResponse(JSON.stringify(resultado),{
        headers:{"Content-Type":"application/jason"},
        status:201
    })

    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
    
    
  
    return NextResponse(JSON.stringify(clientes),{
        Headers:{"Content-type":"application/json"},
        status:201
    })
}
import { NextResponse } from "next/server";

export function PUT(request,{params}) {
    return NextResponse.json("actualizando clientes" + params.id)
}

export function DELETE(request,{params}) {
    return NextResponse.json("borrando clientes" + params.id)
}

export function GET(request,{params}) {
    return NextResponse.json("obeniendo clientes" + params.id)
}
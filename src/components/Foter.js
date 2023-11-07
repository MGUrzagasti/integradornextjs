'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Foter() {
 const router = useRouter()
      
      const onSubmit  =  (e) =>  {
        e.preventDefault()
        console.log(e)
        const primern = e.target.primern.value
        const segundo = e.target.segundon.value 
        const telefono =e.target.telefono.value
        const correo = e.target.email.value 
        const comentario = e.target.area.value 
        console.log(primern,segundo,telefono,correo,comentario)
    
      const res = fetch("/app/api/task",{
       method: "POST",
       body: JSON.stringify({primern,segundo,telefono,correo,comentario}),
       headers: {
        "content-type ": "aplication.JSON"
       }
      })
      const data =  res.json()
      console.log(data)
      router.push("/")
    }

      return (
 
<form action="" onSubmit={onSubmit}>
<div class="flex justify-center items-center w-screen h-screen bg-white">
	
	<div class="container mx-auto my-4 px-4 lg:px-20">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div class="flex">
				<h1 class="font-bold uppercase text-5xl">Escribinos <br /> </h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="textpn" id="primern" placeholder="Primer Nombre*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="textsn" id="segundon" placeholder="Segundo Nombre*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" id="email" placeholder="Email*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="numero" id="telefono" placeholder="Telefono*" />
        </div>
				<div class="my-4">
					<textarea id="area" placeholder="Comentario*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				
        </div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide  bg-sky-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Enviar consulta
          </button>
				</div>
			</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-sky-500 rounded-2xl">
				<div class="flex flex-col text-bold">
					<h1 class="font-bold uppercase text-4xl my-4">Proyecto GC</h1>
				

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Manzoni 1360</h2>
              <p class="text-bold-400">Gonzalez Catán, Provincia de Buenos Aires</p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Telefono</h2>
              <p class="text-bold-400">Tel. (54)5277 0815</p>
              <p class="text-bold-400">info@proyectogc.org</p>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
   
</div>

</form>



  
  
  
  
  




    )
}
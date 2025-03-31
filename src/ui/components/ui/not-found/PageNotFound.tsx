import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[800px] w-full text-center px-5 mx-5">

			<Image
				src="/imgs/not-found.png"
				alt='Starman'
				className="p-5 sm:p-0"
				width={550}
				height={550}
			/>

			<div>
				<p className="font-semibold text-xl">whooops! Página no encontrada</p>
				<p className="font-light">
					<span>Puedes regresar al </span>
					<Link href="/" className="font-normal hover:underline transition-all">Inicio</Link>
				</p>
			</div>

		</div>
	)
}

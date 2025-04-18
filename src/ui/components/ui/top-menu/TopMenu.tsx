import { titleFont } from '@/infrastructure/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {
	return (
		<nav className='flex px-5 justify-between items-center w-full'>
			<div>
				<Link href='/'>
					<span className={`${titleFont.className} antialiased font-bold`}>Home</span>
				</Link>

			</div>
			<div className="hidden sm:block">
				<Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/transaction'>Transacciones</Link>
			</div>

			<div className="flex items-center">
				<Link href="/search" className="mx-2"><IoSearchOutline className="w-5 h-5" /></Link>
				<Link href="/cart" className="mx-2">
					<div className="relative">
						<span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">3</span>
						<IoCartOutline className="w-5 h-5" />
					</div>
				</Link>
				<button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
					Menú
				</button>
			</div>
		</nav>
	)
}

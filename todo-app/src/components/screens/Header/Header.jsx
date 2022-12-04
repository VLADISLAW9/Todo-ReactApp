import React from 'react'
import { BsCheck2All } from 'react-icons/bs'

const Header = () => {
	return (
		<div className='bg-zinc-800 w-full py-2 px-3 flex rounded-b-3xl justify-center'>
			<a href='#'>
				<BsCheck2All className='text-pink-400 w-10 h-10' />
			</a>
		</div>
	)
}

export default Header

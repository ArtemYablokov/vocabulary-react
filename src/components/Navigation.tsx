import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
	return (
		<nav className="h-[50px] flex justify-between px-5 bg-green-200 items-center text-purple-500">
			<span className="font-bold">React 2022</span>
			<span>
				<Link to="/" className="mr-2">Search</Link>
				<Link to="/product" className="mr-2">Product</Link>
				<Link to="/create" className="mr-2">Create</Link>
			</span>
		</nav>
	)
}
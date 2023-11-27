import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
	const [nav, setNav] = useState(true)

	const links = [
		{ id: 1, link: "home" },
		{ id: 2, link: "about" },
		{ id: 3, link: "portfolio" },
		{ id: 4, link: "experience" },
		{ id: 5, link: "Contact" },
	]

	return (
		<div className="flex box-border  justify-between items-center px-4 bg-slate-900 h-20 w-full">
			<div className="font-signature text-5xl md:text-4xl font-bold text-white hover:scale-105 duration-200 ">
				O.K
			</div>
			<div
				onClick={() => setNav(prev => !prev)}
				className="cursor-pointer z-10 md:hidden text-white text-5xl"
			>
				{nav ? <GiHamburgerMenu /> : <FaTimes />}
			</div>
			<div className="hidden md:block">
				<ul className="flex">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 hover:text-white cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 "
						>
							<a className="" href="">
								{link}
							</a>
						</li>
					))}
				</ul>
			</div>
			{!nav && (
				<div className="absolute top-20 left-0 h-[calc(100vh-80px)] w-full bg-slate-900 ">
					<ul className="flex flex-col items-center h-full  justify-center">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="p-4 hover:text-white text-2xl cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 "
							>
								<a className="" href="">
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar

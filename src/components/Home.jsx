import { FaArrowRight } from "react-icons/fa"
import sa from "../assets/ben.JPG"

const Home = () => {
	return (
		<div className="h-[calc(100vh-81px)] box-border">
			<hr className="bg-slate-700" />
			<div className="grid h-full grid-cols-3 bg-slate-900 text-white items-center">
				<div className=" col-span-2 p-4 flex flex-col items-center space-y-3">
					<h1 className=" text-6xl">I&apos; am a Frontend Developer</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta in
						est suscipit aliquam harum inventore ipsa, pariatur earum dolor
					</p>
					<button className=" cursor-pointer hover:scale-105 duration-200 p-2 bg-gradient-to-tl from-blue-600 to-blue-400">
						Portfolio <FaArrowRight className="inline-block" />
					</button>
				</div>
				<div className=" col-span-1 relative">
					<div className="absolute inset-0 flex items-center justify-center">
						<img className="h-72 rounded-3xl " src={sa} alt="Just Me" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

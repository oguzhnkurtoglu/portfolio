import { FaArrowRight } from "react-icons/fa"
import sa from "../assets/ben.JPG"

const Home = () => {
	return (
		<div className="h-[calc(100vh-82px)] box-border  bg-slate-900">
			<hr />
			<div className=" box-border flex flex-col md:grid h-full md:grid-cols-3 text-white items-center">
				<div className=" col-span-2 p-4 flex flex-col items-center text-center space-y-3 mt-8 md:mt-0">
					<h1 className=" text-6xl">I&apos; am a Frontend Developer</h1>
					<p className="px-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta in
						est suscipit aliquam harum inventore ipsa, pariatur earum dolor
					</p>
					<button className="group cursor-pointer hover:scale-105 duration-300 p-2 bg-gradient-to-tl from-blue-600 to-blue-400">
						Portfolio
						<span className="">
							<FaArrowRight className="inline-block group-hover:rotate-90 duration-300" />
						</span>
					</button>
				</div>
				<div className="col-span-1 h-full  ">
					<div className="flex items-center justify-center h-full">
						<img className="rounded-3xl h-60 " src={sa} alt="Just Me" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

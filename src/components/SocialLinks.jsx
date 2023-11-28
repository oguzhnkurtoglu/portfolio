import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
	return (
		<div className=" fixed flex flex-col top-[40%] left-0  text-white font-bold">
			<div className="flex  bg-gray-400 rounded-xl w-40 h-14 items-center justify-between px-4 ml-[-100px] hover:ml-[-10px] ">
				<a className="flex w-full items-center justify-between " href="">
					Github
					<FaGithub size={30} />
				</a>
			</div>
			<div className="flex  bg-gray-400 rounded-xl w-40 h-14 items-center justify-between px-4 ml-[-100px] hover:ml-[-10px] ">
				<a className="flex w-full items-center justify-between " href="">
					Linkedin <FaLinkedin size={30} />
				</a>
			</div>
			<div className="flex  bg-gray-400 rounded-xl w-40 h-14 items-center justify-between px-4 ml-[-100px] hover:ml-[-10px] ">
				<a className="flex w-full items-center justify-between " href="">
					E-Mail <HiOutlineMail size={30} />
				</a>
			</div>

			<div className="flex  bg-gray-400 rounded-xl w-40 h-14 items-center justify-between px-4 ml-[-100px] hover:ml-[-10px] ">
				<a
					className="flex w-full items-center justify-between "
					href="../public/ben.JPG"
					download="Oguzun Resmi"
				>
					Resume <BsFillPersonLinesFill size={30} />
				</a>
			</div>
		</div>
	)
}

export default SocialLinks

import { ChevronFirst } from "lucide-react";

export default function SideBarItem({ icon, text, alert }) {
	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-white border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center">
					<img
						src="https://img.logoipsum.com/243.svg"
						className="w-32"
						alt="icon"
					/>
					<button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-410">
						<ChevronFirst />
					</button>
				</div>
			</nav>
		</aside>
	);
}

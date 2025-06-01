import React from "react";
import SideBar, { SidebarItem } from "./components/sidebar/SideBar";
import { LayoutDashboard } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Boxes } from "lucide-react";
import { Package } from "lucide-react";
import { Receipt } from "lucide-react";
import { Settings } from "lucide-react";
import { LifeBuoy, UserCircle } from "lucide-react";

export default function App() {
	return (
		<main>
			<SideBar>
				<SidebarItem
					icon={<LayoutDashboard size={20} />}
					text="Dashboard"
					alert
				/>

				<SidebarItem
					icon={<BarChart3 size={20} />}
					text="Statistics"
					active
				/>

				<SidebarItem icon={<UserCircle size={20} />} text="Users" />

				<SidebarItem icon={<Boxes size={20} />} text="Inventory" />
				<SidebarItem icon={<Package size={20} />} text="Orders" alert />

				<SidebarItem icon={<Receipt size={20} />} text="Billings" />

				<hr className="my-3" />

				<SidebarItem icon={<Settings size={20} />} text="Settings" />

				<SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />
			</SideBar>
		</main>
	);
}

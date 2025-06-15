import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRender from "./components/render_props_pattern/AppRender";
import AppHOC from "./components/HOC_pattern/AppHOC";
import Navigation from "./components/Navigation";
import AppCompound from "./components/compound_pattern/AppCompound";

export default function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="render_props_pattern" element={<AppRender />} />
				<Route path="HOC_pattern" element={<AppHOC />} />
				<Route path="compound_pattern" element={<AppCompound />} />
			</Routes>
		</BrowserRouter>
	);
}

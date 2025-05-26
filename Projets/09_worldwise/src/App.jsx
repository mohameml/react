import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import Form from "./components/Form/Form";
import City from "./components/City/City";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage";

// import Homepage from "./pages/HomePage/Homepage";
// import Product from "./pages/Product/Product";
// import Pricing from "./pages/Pricing/Pricing";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import Login from "./pages/Login/Login";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const Login = lazy(() => import("./pages/Login/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

export default function App() {
	return (
		<CitiesProvider>
			<AuthProvider>
				<BrowserRouter>
					<Suspense fallback={<SpinnerFullPage />}>
						<Routes>
							<Route index element={<Homepage />} />
							<Route path="prodcut" element={<Product />} />
							<Route path="pricing" element={<Pricing />} />
							<Route
								path="app"
								element={
									<ProtectedRoute>
										<AppLayout />
									</ProtectedRoute>
								}
							>
								<Route
									index
									element={<Navigate replace to="cities" />}
								/>
								<Route path="cities" element={<CityList />} />
								<Route path="cities/:id" element={<City />} />
								<Route
									path="countries"
									element={<CountryList />}
								/>
								<Route path="form" element={<Form />} />
							</Route>
							<Route path="login" element={<Login />} />
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</AuthProvider>
		</CitiesProvider>
	);
}

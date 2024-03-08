import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PricesPage } from "../pages/PricesPage/PricesPage";
import { AuthPage } from "../pages/AuthPage/AuthPage";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/Custom-ChatGPT" element={<MainPage />} />
			<Route path="/Custom-ChatGPT/prices" element={<PricesPage />} />
			<Route
				path="/Custom-ChatGPT/signIn"
				element={<AuthPage page="SignIn" />}
			/>
			<Route
				path="/Custom-ChatGPT/signUp"
				element={<AuthPage page="SignUp" />}
			/>
			<Route path="*" element={<Navigate to="/Custom-ChatGPT" />} />
		</Routes>
	);
};

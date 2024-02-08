import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PricesPage } from "../pages/PricesPage/PricesPage";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/Custom-ChatGPT" element={<MainPage />} />
			<Route path="/Custom-ChatGPT/prices" element={<PricesPage />} />
			<Route path="*" element={<Navigate to="/Custom-ChatGPT" />} />
		</Routes>
	);
};

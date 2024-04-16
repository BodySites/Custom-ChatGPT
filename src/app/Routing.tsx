import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PricesPage } from "../pages/PricesPage/PricesPage";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import { MyChatbotsPage } from "../pages/MyChatbotsPage/MyChatbotsPage";
import { AccountPage } from "../pages/AccountPage/AccountPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireBase";
import { useEffect, useState } from "react";

export const Routing = () => {
	const [isAuth, setIsAuth] = useState<boolean | undefined>();

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setIsAuth(true);
			} else setIsAuth(false);
		});
	}, []);

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
			<Route
				path="/Custom-ChatGPT/my-chatbots"
				element={
					isAuth == false ? (
						<Navigate to="/Custom-ChatGPT/signIn" />
					) : (
						<MyChatbotsPage />
					)
				}
			/>
			<Route
				path="/Custom-ChatGPT/account"
				element={
					isAuth == false ? (
						<Navigate to="/Custom-ChatGPT/signIn" />
					) : (
						<AccountPage />
					)
				}
			/>
			<Route path="*" element={<Navigate to="/Custom-ChatGPT" />} />
		</Routes>
	);
};

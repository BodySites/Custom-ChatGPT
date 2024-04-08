import React, { SyntheticEvent, useEffect } from "react";
import styled from "styled-components";
import logo from "../../../public/icons/logo-circle.svg";
import { AuthLayout } from "../../widgets/layout/AuthLayout";
import { RegForm } from "../../widgets/RegForm/RegForm";
import { AuthForm } from "../../widgets/AuthForm/AuthForm";
import {
	signInGooglePopup,
	signInGoogleRedirect
} from "../../entities/user/api/userAPI";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { auth } from "../../app/FireBase";
import { onAuthStateChanged } from "firebase/auth";

const Container = styled.div`
	background-color: #fff;
	min-height: 100vh;
	display: flex;
	height: 100%;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 1.5rem;
`;

const Logo = styled.a`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	color: rgb(39 39 42);
`;

const LogoIcon = styled.img`
	height: 2rem;
	width: 2rem;
`;

const LogoTitle = styled.div`
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 400;
`;

const Content = styled.section`
	flex: 1 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface Props {
	page: "SignIn" | "SignUp";
}

export const AuthPage: React.FC<Props> = ({ page }) => {
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				navigate("/Custom-ChatGPT/prices");
			}
		});
	}, []);

	async function authUserGoogle(e: SyntheticEvent) {
		e.preventDefault();
		if (isMobile) signInGoogleRedirect();
		else {
			const isAuth = await signInGooglePopup();
			isAuth && navigate("/Custom-ChatGPT");
		}
	}

	return (
		<Container>
			<Logo href="/">
				<LogoIcon src={logo} alt="Logo" />
				<LogoTitle>Chatbase</LogoTitle>
			</Logo>
			<Content>
				{page === "SignUp" ? (
					<AuthLayout title="Get started for free" enterGoogle={authUserGoogle}>
						<RegForm />
					</AuthLayout>
				) : (
					<AuthLayout title="Welcome Back" enterGoogle={authUserGoogle}>
						<AuthForm />
					</AuthLayout>
				)}
			</Content>
		</Container>
	);
};

import React from "react";
import styled from "styled-components";
import logo from "../../../public/icons/logo-circle.svg";
import { AuthLayout } from "../../widgets/layout/AuthLayout";
import { RegForm } from "../../widgets/RegForm/RegForm";
import { AuthForm } from "../../widgets/AuthForm/AuthForm";

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
	return (
		<Container>
			<Logo href="/">
				<LogoIcon src={logo} alt="Logo" />
				<LogoTitle>Chatbase</LogoTitle>
			</Logo>
			<Content>
				{page === "SignUp" ? (
					<AuthLayout title="Get started for free">
						<RegForm />
					</AuthLayout>
				) : (
					<AuthLayout title="Welcome Back">
						<AuthForm />
					</AuthLayout>
				)}
			</Content>
		</Container>
	);
};

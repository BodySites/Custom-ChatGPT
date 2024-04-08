import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { LinkButtonBlack } from "../../shared/ui/LinkButton/LinkButtonBlack";
import { TextInput } from "../../shared/ui/Input/TextInput";
import { PasswordInput } from "../../shared/ui/Input/PasswordInput";
import {
	validEmail,
	validPassword
} from "../../shared/helpers/validationForm/validationForm";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../entities/user/api/userAPI";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const SignInLink = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	font-size: 0.95rem;

	& > a {
		color: inherit;
		font-weight: 700;
		transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
	& > a:hover {
		color: rgb(147 51 234);
	}
`;

const ErrorText = styled.div`
	text-align: center;
	color: red;
	line-height: 1.2rem;
`;

const ForgotPassword = styled.a`
	font-size: 0.9rem;
	text-align: right;
	line-height: 1.5rem;
	font-weight: 600;
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	color: black;

	&:hover {
		color: rgb(147 51 234);
	}
`;

export const AuthForm: React.FC = () => {
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isAuth, setIsAuth] = useState(true);
	const navigate = useNavigate();

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const validEm = validEmail(e.currentTarget.email.value);
		const validPass = validPassword(e.currentTarget.password.value);
		if (validEm && validPass) {
			const isAuth = await authUser(
				e.currentTarget.email.value,
				e.currentTarget.password.value
			);
			isAuth ? navigate("/Custom-ChatGPT") : setIsAuth(false);
		}
		setIsValidEmail(validEm);
		setIsValidPassword(validPass);
	}

	function getTextInvalid(
		validEmail: boolean,
		validPassword: boolean,
		isAuth: boolean
	) {
		if (!isAuth) return "Invalid Email or Password";
		if (!validEmail && !validPassword) return "Invalid Email and Password";
		if (!validPassword) return "Invalid Password";
		if (!validEmail) return "Invalid Email";
	}

	return (
		<>
			<Form onSubmit={onSubmit}>
				<TextInput
					name="email"
					title="Email"
					type="email"
					autoComplete="email"
					placeholder="name@example.com"
				/>
				<PasswordInput
					name="password"
					title="Password"
					autoComplete="new-password"
					placeholder="Password"
				/>
				<ForgotPassword href="">Forgot password?</ForgotPassword>
				<div></div>
				<LinkButtonBlack type="submit">Sign in</LinkButtonBlack>
			</Form>
			{!isValidPassword || !isValidEmail || !isAuth ? (
				<ErrorText>
					{getTextInvalid(isValidEmail, isValidPassword, isAuth)}
				</ErrorText>
			) : (
				""
			)}
			<SignInLink>
				Don't have an account? <a href="/Custom-ChatGPT/signUp">Sign up</a>
			</SignInLink>
		</>
	);
};

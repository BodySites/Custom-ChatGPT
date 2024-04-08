import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { LinkButtonBlack } from "../../shared/ui/LinkButton/LinkButtonBlack";
import { TextInput } from "../../shared/ui/Input/TextInput";
import { PasswordInput } from "../../shared/ui/Input/PasswordInput";
import checkTrue from "../../../public/icons/check-true.svg";
import checkFalse from "../../../public/icons/check-false.svg";
import {
	equalPasswords,
	requireListPassword,
	validEmail,
	validPassword,
	validRequireList
} from "../../shared/helpers/validationForm/validationForm";
import { createUser } from "../../entities/user/api/userAPI";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	font-size: 0.9rem;
	gap: 0.5rem;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	line-height: 1.2rem;
`;

const CheckIcon = styled.img`
	margin-right: 0.25rem;
	height: 1rem;
	width: 1rem;
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

export const RegForm: React.FC = () => {
	const [password, setPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isEqualPasswords, setIsEqualPasswords] = useState(true);
	const [validList, setValidList] = useState<Array<Boolean>>([
		false,
		false,
		false,
		false
	]);
	const [isCreated, setIsCreated] = useState(true);
	const navigate = useNavigate();

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const validEm = validEmail(e.currentTarget.email.value);
		const validPass = validPassword(e.currentTarget.password.value);
		const equalPass = equalPasswords(
			e.currentTarget.password.value,
			e.currentTarget.confirmPassword.value
		);
		if (validEm && validPass && equalPass) {
			const isCreated = await createUser(
				e.currentTarget.email.value,
				e.currentTarget.password.value
			);
			isCreated ? navigate("/Custom-ChatGPT") : setIsCreated(false);
		}
		setIsValidEmail(validEm);
		setIsValidPassword(validPass);
		setIsEqualPasswords(equalPass);
	}

	function getPassword(text: string) {
		setPassword(text);
		setValidList(validRequireList(text));
	}

	function getTextInvalid(
		validEmail: boolean,
		validPassword: boolean,
		validEqual: boolean,
		isCreated: boolean
	) {
		if (!isCreated) return "User with this email already exists";
		if (!validEmail && !validPassword) return "Invalid Email and Password";
		if (!validPassword) return "Invalid Password";
		if (!validEmail && !validEqual)
			return "Invalid Email and Passwords do not match";
		if (!validEmail) return "Invalid Email";
		if (!validEqual) return "Passwords do not match";
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
					callback={getPassword}
				/>
				{requireListPassword && password ? (
					<List>
						{requireListPassword.map((item, index) => (
							<ListItem key={index}>
								<CheckIcon src={validList[index] ? checkTrue : checkFalse} />
								{item}
							</ListItem>
						))}
					</List>
				) : (
					""
				)}
				<PasswordInput
					name="confirmPassword"
					title="Confirm Password"
					autoComplete="off"
					placeholder="Password"
				/>
				<div></div>
				<LinkButtonBlack type="submit">Sign up</LinkButtonBlack>
			</Form>
			{!isValidPassword || !isValidEmail || !isEqualPasswords || !isCreated ? (
				<ErrorText>
					{getTextInvalid(
						isValidEmail,
						isValidPassword,
						isEqualPasswords,
						isCreated
					)}
				</ErrorText>
			) : (
				""
			)}
			<SignInLink>
				Already have an account? <a href="/Custom-ChatGPT/signIn">Sign in</a>
			</SignInLink>
		</>
	);
};

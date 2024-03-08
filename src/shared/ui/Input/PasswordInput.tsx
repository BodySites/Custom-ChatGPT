import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import visibleIcon from "../../../../public/icons/visible.svg";
import unvisibleIcon from "../../../../public/icons/unvisible.svg";

const Container = styled.div``;

const Label = styled.label`
	display: inline-block;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1;
	margin-bottom: 0.9rem;
	cursor: default;
`;

const Input = styled.input`
	display: flex;
	height: 2.25rem;
	width: 100%;
	border-radius: 0.375rem;
	padding: 0.5rem 0.75rem;
	padding-right: 2.2rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	border: 1px solid #e5e7eb;

	&:focus {
		box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
		border: 1px solid rgb(139, 92, 246);
	}

	&::-webkit-input-placeholder {
		color: #b6b6b6;
		font-size: 0.8rem;
	}
	&::-moz-placeholder {
		color: #b6b6b6;
		font-size: 0.8rem;
	}
	&:-ms-input-placeholder {
		color: #b6b6b6;
		font-size: 0.8rem;
	}
	&::-ms-input-placeholder {
		color: #b6b6b6;
		font-size: 0.8rem;
	}
	&::placeholder {
		color: #b6b6b6;
		font-size: 0.8rem;
	}
`;

const InputBlock = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

const SeeIcon = styled.button`
	position: absolute;
	right: 0;
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	background-color: transparent;
	padding: 0 0.75rem;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 500;
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

	& > img {
		height: 1.25rem;
		width: 1.25rem;
	}
`;

interface Props {
	name: string;
	title: string;
	autoComplete: string;
	placeholder: string;
	callback?: (text: string) => void;
}

export const PasswordInput: React.FC<Props> = ({
	name,
	title,
	autoComplete,
	placeholder,
	callback
}) => {
	const [password, setPassword] = useState("");
	const [visible, setVisible] = useState(false);

	return (
		<Container>
			<Label htmlFor={name}>{title}</Label>
			<InputBlock>
				<Input
					name={name}
					id={name}
					type={visible ? "text" : "password"}
					autoCorrect="off"
					autoComplete={autoComplete}
					placeholder={placeholder}
					autoCapitalize="none"
					value={password}
					onChange={(e: SyntheticEvent<HTMLInputElement>) => {
						setPassword(e.currentTarget.value);
						callback && callback(e.currentTarget.value);
					}}
				/>
				<SeeIcon type="button" onClick={() => setVisible(!visible)}>
					<img src={visible ? visibleIcon : unvisibleIcon} />
				</SeeIcon>
			</InputBlock>
		</Container>
	);
};

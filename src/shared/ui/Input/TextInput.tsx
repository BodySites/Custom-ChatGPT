import React, { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label`
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

	@media screen and (max-width: 400px) {
		padding-right: 0.75rem;
	}
`;

interface Props {
	name: string;
	type: string;
	title: string;
	autoComplete: string;
	placeholder: string;
	labelDisable?: boolean;
	valueDefault?: string;
}

export const TextInput: React.FC<Props> = ({
	name,
	type,
	title,
	autoComplete,
	placeholder,
	labelDisable = false,
	valueDefault = ""
}) => {
	const [text, setText] = useState("");
	useEffect(() => {
		setText(valueDefault);
	}, [valueDefault]);

	return (
		<Container>
			<Label
				htmlFor={name}
				style={{ display: labelDisable ? "none" : "inline-block" }}>
				{title}
			</Label>
			<Input
				name={name}
				id={name}
				type={type}
				autoCorrect="off"
				autoComplete={autoComplete}
				placeholder={placeholder}
				autoCapitalize="none"
				value={text}
				onChange={(e: SyntheticEvent<HTMLInputElement>) =>
					setText(e.currentTarget.value)
				}
			/>
		</Container>
	);
};

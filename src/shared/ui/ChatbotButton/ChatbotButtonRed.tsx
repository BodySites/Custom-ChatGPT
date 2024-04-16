import React, { SyntheticEvent } from "react";
import styled from "styled-components";

const Button = styled.a`
	& > button {
		display: inline-flex;
		height: 2.25rem;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		border-radius: 0.375rem;
		background-color: rgb(239 68 68);
		padding: 0.25rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: rgb(250 250 250);
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
			0 1px 2px -1px rgba(0, 0, 0, 0.1);
		transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
	& > button:hover {
		background-color: rgba(239, 68, 68, 0.9);
	}
`;

interface Props {
	href?: string;
	onClick?: (e: SyntheticEvent) => void;
	children?: React.ReactNode;
}

export const ChatbotButtonRed: React.FC<Props> = ({
	href = "",
	onClick,
	children
}) => {
	return (
		<Button href={href} onClick={onClick}>
			<button>{children}</button>
		</Button>
	);
};

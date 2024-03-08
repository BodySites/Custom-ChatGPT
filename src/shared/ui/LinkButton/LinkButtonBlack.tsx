import React from "react";
import styled from "styled-components";

const Link = styled.a`
	height: 2.25rem;
	width: 100%;
	display: inline-block;
	border-radius: 0.375rem;
	background-color: rgb(24 24 27);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: rgba(39, 39, 42, 0.9);
	}
`;

const Button = styled.button`
	width: 100%;
	height: 100%;
	border-radius: 0.375rem;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	padding: 0.5rem 1rem;
	font-size: 0.85rem;
	line-height: 1.25rem;
	font-weight: 600;
	color: rgb(255 255 255);
`;

interface Props {
	href?: string;
	type?: "button" | "submit" | "reset";
	children?: React.ReactNode;
}

export const LinkButtonBlack: React.FC<Props> = ({
	href = "",
	type = "button",
	children
}) => {
	return (
		<Link href={href}>
			<Button type={type}>{children}</Button>
		</Link>
	);
};

import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.a`
	display: flex;
	height: 2.25rem;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	border-radius: 0.25rem;
	border: 1px solid rgb(39 39 42);
	padding: 0.25rem 0.5rem;
	font-size: 0.8rem;
	line-height: 1.25rem;
	font-weight: 600;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.15s;
`;

interface Props {
	href?: string;
	children?: React.ReactNode;
	Color?: string;
	BGHover?: string;
}

export const LinkButtonTransparent: React.FC<Props> = ({
	href = "",
	Color = "inherit",
	BGHover = "transparent",
	children
}) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<Button
			href={href}
			style={{
				color: Color,
				backgroundColor: isHover ? BGHover : "transparent"
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			{children}
		</Button>
	);
};

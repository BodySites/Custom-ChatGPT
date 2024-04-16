import React from "react";
import styled from "styled-components";

const Container = styled.div`
	border-radius: 0.5rem;
	border: 1px solid rgb(228 228 231);
	background-color: rgb(255 255 255);
	color: rgb(9 9 11);
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
	padding: 1.5rem;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1;
	letter-spacing: -0.025em;
`;

interface Props {
	borderColor?: string;
	colorTitle?: string;
	title: string;
	children?: React.ReactNode;
}

export const InfoBlockLayout: React.FC<Props> = ({
	borderColor,
	colorTitle,
	title,
	children
}) => {
	return (
		<Container style={{ borderColor: borderColor }}>
			<Title style={colorTitle ? { color: colorTitle } : {}}>{title}</Title>
			{children}
		</Container>
	);
};

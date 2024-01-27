import React from "react";
import styled from "styled-components";
import { ICase } from "../api/ICase.tsx";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.25rem;
	border: 1px solid rgb(41 37 36);
	border-radius: 1rem;
	padding: 1.75rem;
	padding-bottom: 0;
	color: rgb(255 255 255);
	background: radial-gradient(
		89.72% 84.75% at 49.92% 48.04%,
		rgba(69, 30, 137, 0.25) 0%,
		rgba(0, 0, 0, 0) 100%
	);
`;

const Image = styled.img`
	display: block;
	max-width: 100%;
	margin-top: 1rem;
	height: 100%;
	object-fit: contain;
	object-position: bottom;
	color: transparent;
`;

const Title = styled.h5`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
`;

const Text = styled.p`
	font-size: 1rem;
	line-height: 1.75rem;
	font-weight: 400;
	color: rgb(231 229 228);
`;

export const CaseBlock: React.FC<ICase> = ({ img, title, description }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Text>{description}</Text>
			<Image src={img} alt="Photo" loading="lazy" />
		</Container>
	);
};

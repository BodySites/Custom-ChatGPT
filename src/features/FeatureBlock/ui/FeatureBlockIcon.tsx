import React from "react";
import styled from "styled-components";
import { IFeature } from "../api/IFeature.tsx";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.25rem;
`;

const Icon = styled.img`
	display: block;
	color: rgb(24 24 27);
`;

const Title = styled.h5`
	padding-top: 0.25rem;
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 500;
`;

const Text = styled.p`
	font-size: 0.8rem;
	line-height: 1.25rem;
	font-weight: 400;
	color: rgb(63 63 70);
`;

export const FeatureBlockIcon: React.FC<IFeature> = ({
	img,
	title,
	description
}) => {
	return (
		<Container>
			<Icon src={img} alt="Icon" />
			<Title>{title}</Title>
			<Text>{description}</Text>
		</Container>
	);
};

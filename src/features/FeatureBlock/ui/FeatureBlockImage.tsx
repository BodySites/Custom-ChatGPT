import React from "react";
import styled from "styled-components";
import { IFeature } from "../api/IFeature.tsx";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 0.375rem;
	border-width: 1px;
	background-color: rgb(255 255 255);
	transition-property: all;
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	border: 1px solid rgb(229, 231, 235);

	&:hover {
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -2px rgba(0, 0, 0, 0.1);
	}
`;

const Image = styled.div`
	background-color: rgb(228 228 231);

	& img {
		display: block;
		max-width: 100%;
		-o-object-fit: contain;
		object-fit: contain;
		-o-object-position: center;
		object-position: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 2rem;
		color: transparent;
	}
`;

const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.25rem;
	background-color: rgb(255 255 255);
	padding: 1.25rem;
	height: 10rem;

	@media screen and (max-width: 1000px) {
		height: auto;
	}
`;

const Title = styled.h5`
	font-size: 1.15rem;
	line-height: 1.75rem;
	font-weight: 500;
	color: black;
`;

const Text = styled.p`
	font-size: 0.9rem;
	font-weight: 400;
	color: rgb(63 63 70);
	line-height: 1.6rem;
`;

export const FeatureBlockImage: React.FC<IFeature> = ({
	img,
	title,
	description
}) => {
	return (
		<Container>
			<Image>
				<img src={img} alt="Photo" loading="lazy" />
			</Image>
			<TextBlock>
				<Title>{title}</Title>
				<Text>{description}</Text>
			</TextBlock>
		</Container>
	);
};

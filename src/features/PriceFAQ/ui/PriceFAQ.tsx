import React from "react";
import styled from "styled-components";
import { IPriceFAQ } from "../api/IPriceFAQ.tsx";

const Container = styled.div``;

const Title = styled.h3`
	font-size: 1.125rem;
	line-height: 1.75rem;
	color: rgb(15 23 42);
	line-height: 1.5;
`;

const Description = styled.p`
	margin-top: 1rem;
	line-height: 1.7;
	color: rgb(51 65 85);
`;

export const PriceFAQ: React.FC<IPriceFAQ> = ({ title, description }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	);
};

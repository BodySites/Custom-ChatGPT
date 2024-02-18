import React from "react";
import styled from "styled-components";
import { IPriceAddOn } from "../api/IPriceAddOn.tsx";
import { PriceBlockLayout } from "../../../widgets/layout/PriceBlockLayout.tsx";
import { LinkButtonBlack } from "../../../shared/ui/LinkButton/LinkButtonBlack.tsx";

const Title = styled.h2`
	font-size: 1.35rem;
	font-weight: 600;
	line-height: 1.5rem;
	color: rgb(0 0 0);
	margin-bottom: 1.25rem;
`;

const DescText = styled.p`
	line-height: 1.5;
`;

const Price = styled.div`
	margin: 1.25rem 0;
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 600;
`;

const PriceText = styled.span`
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 500;
	color: rgb(24 24 27);
`;

export const PriceAddOnStatic: React.FC<IPriceAddOn> = ({
	title,
	price,
	description
}) => {
	return (
		<PriceBlockLayout minHeight="15rem">
			<Title>{title}</Title>
			<DescText>{description}</DescText>
			<Price>
				${price}
				<PriceText>/month</PriceText>
			</Price>
			<LinkButtonBlack>Get Add-on</LinkButtonBlack>
		</PriceBlockLayout>
	);
};

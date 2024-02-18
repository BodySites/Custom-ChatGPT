import React, { SyntheticEvent, useState } from "react";
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

const Subtitle = styled.div`
	margin-bottom: 1.25rem;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 500;
	color: rgb(24 24 27);
`;

const DescInput = styled.div`
	display: flex;
	align-items: center;
	line-height: 1.5;
`;

const Input = styled.input`
	margin: 0 0.25rem;
	padding: 0.5rem 0.75rem;
	height: 2.25rem;
	width: 6rem;
	border-radius: 0.375rem;
	border-width: 1px;
	font-size: 0.875rem;
	line-height: 1.25rem;
	background-color: #fff;
	border: 1px solid #e5e7eb;

	&:focus {
		border-color: rgb(139 92 246);
		box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
	}
`;

const Price = styled.div`
	margin: 1.25rem 0;
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 700;
`;

export const PriceAddOnInput: React.FC<IPriceAddOn> = ({
	title,
	subtitle = "",
	price,
	description,
	defaultInputValue = 1
}) => {
	const [inputValue, setInputValue] = useState(defaultInputValue);

	return (
		<PriceBlockLayout minHeight="15rem">
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<DescInput>
				I want
				<Input
					type="number"
					step={defaultInputValue}
					min={defaultInputValue}
					value={inputValue}
					onChange={(e: SyntheticEvent<HTMLInputElement>) => {
						let value =
							Math.floor(
								Math.abs(parseInt(e.currentTarget.value)) / defaultInputValue
							) * defaultInputValue;
						!value || value < defaultInputValue
							? (value = defaultInputValue)
							: "";
						setInputValue(value);
					}}
				/>
				{description}
			</DescInput>
			<Price>
				Your Total: ${(price * inputValue) / defaultInputValue} / month
			</Price>
			<LinkButtonBlack>Get Add-on</LinkButtonBlack>
		</PriceBlockLayout>
	);
};

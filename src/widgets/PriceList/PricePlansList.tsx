import React from "react";
import styled from "styled-components";
import { IPricePlan, PricePlanBlock } from "../../features/PricePlanBlock";

const Container = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: 1fr;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media screen and (min-width: 1024px) {
		max-width: 56rem;
		margin: 0 auto;
	}
	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
		max-width: none;
		margin: 0;
	}
`;

interface Props {
	items: IPricePlan[];
	rateState: "Yearly billing" | "Monthly billing";
}

export const PricePlansList: React.FC<Props> = ({ items, rateState }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<PricePlanBlock {...item} rate={rateState} key={index} />
			))}
		</Container>
	);
};

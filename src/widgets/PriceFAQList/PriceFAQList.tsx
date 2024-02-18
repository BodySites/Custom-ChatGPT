import React from "react";
import styled from "styled-components";
import { IPriceFAQ, PriceFAQ } from "../../features/PriceFAQ";

const List = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
`;

interface Props {
	items: IPriceFAQ[];
}

export const PriceFAQList: React.FC<Props> = ({ items }) => {
	return (
		<>
			<List>
				{items.slice(0, items.length / 2).map((item, index) => (
					<PriceFAQ {...item} key={index} />
				))}
			</List>
			<List>
				{items.slice(items.length / 2, items.length).map((item, index) => (
					<PriceFAQ {...item} key={index} />
				))}
			</List>
		</>
	);
};

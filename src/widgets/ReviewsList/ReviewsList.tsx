import React from "react";
import styled from "styled-components";
import { ReviewBlock, IReview } from "../../features/ReviewBlock";

const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(1, minmax(0, 1fr));
	gap: 1rem;
	grid-auto-flow: row;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;

interface Props {
	items: IReview[];
}

export const ReviewsList: React.FC<Props> = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<div style={item.styles}>
					<ReviewBlock {...item} key={index} />
				</div>
			))}
		</Container>
	);
};

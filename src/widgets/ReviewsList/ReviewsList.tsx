import React from "react";
import styled from "styled-components";
import { ReviewBlock, IReview } from "../../features/ReviewBlock";
import Media from "react-media";

const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(1, minmax(0, 1fr));
	gap: 1rem;
	grid-auto-flow: row;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	& > div {
		line-height: 1.5rem;
	}

	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		justify-content: start;
		align-items: stretch;

		& > div:nth-child(2) {
			grid-column: 1 / 3;
			grid-row: 1;
		}
	}

	@media screen and (max-width: 640px) {
		grid-template-columns: 1fr;

		& > div:nth-child(2) {
			grid-column: 1 / 2;
		}
	}
`;

interface Props {
	items: IReview[];
}

export const ReviewsList: React.FC<Props> = ({ items }) => {
	return (
		<Container>
			<Media query="(max-width: 1200px)">
				{matches =>
					matches
						? items.map((item, index) => (
								<div>
									<ReviewBlock {...item} key={index} />
								</div>
						  ))
						: items.map((item, index) => (
								<div style={item.styles}>
									<ReviewBlock {...item} key={index} />
								</div>
						  ))
				}
			</Media>
		</Container>
	);
};

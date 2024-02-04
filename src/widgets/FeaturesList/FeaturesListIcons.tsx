import React from "react";
import styled from "styled-components";
import { FeatureBlockIcon, IFeature } from "../../features/FeatureBlock";

const Container = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

interface Props {
	items: IFeature[];
}

export const FeaturesListIcons: React.FC<Props> = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<FeatureBlockIcon {...item} key={index} />
			))}
		</Container>
	);
};

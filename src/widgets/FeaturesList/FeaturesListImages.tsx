import React from "react";
import styled from "styled-components";
import { FeatureBlockImage, IFeature } from "../../features/FeatureBlock";

const Container = styled.div`
	display: grid;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
	gap: 2.5rem;
	grid-template-columns: repeat(3, minmax(0, 1fr));
`;

interface Props {
	items: IFeature[];
}

export const FeaturesListImages: React.FC<Props> = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<FeatureBlockImage {...item} key={index} />
			))}
		</Container>
	);
};

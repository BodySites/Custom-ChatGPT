import React from "react";
import styled from "styled-components";
import { CaseBlock, ICase } from "../../features/CaseBlock";

const Container = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`;

interface Props {
	items: ICase[];
}

export const CasesList: React.FC<Props> = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<CaseBlock {...item} key={index} />
			))}
		</Container>
	);
};

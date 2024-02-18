import React from "react";
import styled from "styled-components";

const Container = styled.section`
	padding-top: 4rem;
	padding-bottom: 4rem;
	margin-top: 2.5rem;
`;

const Title = styled.h4`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 800;
	color: rgb(0 0 0);
`;

const List = styled.ul`
	margin-top: 2rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr;

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		max-width: none;
	}
`;

interface Props {
	children?: React.ReactNode;
	title: string;
}

export const PricingSectionLayout: React.FC<Props> = ({ title, children }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<List>{children}</List>
		</Container>
	);
};

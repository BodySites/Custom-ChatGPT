import React from "react";
import styled from "styled-components";

const Container = styled.section`
	margin: 0 auto;
	margin-bottom: 1.75rem;
	display: flex;
	max-width: 75rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.75rem;
	padding: 2.5rem;
`;

interface Props {
	children?: React.ReactNode;
}

export const SectionLayout: React.FC<Props> = ({ children }) => {
	return <Container>{children}</Container>;
};

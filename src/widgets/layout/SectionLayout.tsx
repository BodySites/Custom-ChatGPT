import React from "react";
import styled from "styled-components";

const Container = styled.section`
	margin: 0 auto;
	margin-bottom: 1.75rem;
	display: flex;
	width: 100%;
	max-width: 1280px;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.75rem;
	padding: 2.5rem 1.5rem;
`;

interface Props {
	zIndex?: number;
	children?: React.ReactNode;
}

export const SectionLayout: React.FC<Props> = ({ zIndex = 0, children }) => {
	return <Container style={{ zIndex: zIndex }}>{children}</Container>;
};

import React from "react";
import styled from "styled-components";

const Container = styled.div`
	border-radius: 0.5rem;
	background-color: rgb(244 244 245);
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
`;

interface Props {
	children?: React.ReactNode;
}

export const PriceBlockLayout: React.FC<Props> = ({ children }) => {
	return <Container>{children}</Container>;
};

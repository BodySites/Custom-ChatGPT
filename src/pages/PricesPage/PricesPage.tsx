import React from "react";
import styled from "styled-components";
import { Header } from "../../widgets/layout/Header/Header";
import { Footer } from "../../widgets/layout/Footer/Footer";

const Container = styled.div`
	background-color: #fff;
`;

const Content = styled.main`
	padding: 6rem;

	@media screen and (max-width: 640px) {
		padding: 4rem 2rem;
	}
`;

export const PricesPage: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content></Content>
			<Footer BG="rgb(244 244 245)" colorText="black" />
		</Container>
	);
};

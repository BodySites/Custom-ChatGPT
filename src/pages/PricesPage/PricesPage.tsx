import React from "react";
import styled from "styled-components";
import { Header } from "../../widgets/layout/Header/Header";
import { Footer } from "../../widgets/layout/Footer/Footer";
import { SwitchBlock } from "../../shared/ui/SwitchBlock/SwitchBlock";
import pricePlanState from "./store/PricePlanState";
import { observer } from "mobx-react-lite";
import { PricePlansList } from "../../widgets/PriceList/PricePlansList";
import { pricePlans } from "../../widgets/PriceList/pricePlansObject";
import { PricingSectionLayout } from "../../widgets/layout/PricingSectionLayout";
import { priceAddOnsItems } from "../../features/PriceAddOn/static/PriceAddOnsObject";
import { PriceAddOnInput, PriceAddOnStatic } from "../../features/PriceAddOn";

const Container = styled.div`
	background-color: #fff;
`;

const Content = styled.main`
	padding: 6rem;

	@media screen and (max-width: 768px) {
		padding: 4rem 2rem;
	}
`;

const PricePlans = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 3rem;

	@media screen and (min-width: 768px) {
		gap: 4rem;
	}
`;

const PricePlansHead = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Title = styled.h1`
	font-weight: 800;
	color: rgb(0 0 0);
	font-size: 3.75rem;
	line-height: 1;

	@media screen and (max-width: 640px) {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}
`;

const Subtitle = styled.p`
	margin: 1.5rem 0 1rem;
	text-align: center;

	@media screen and (max-width: 640px) {
		margin: 1.5rem 0 0.5rem;
	}
`;

export const PricesPage: React.FC = observer(() => {
	function changePlan(text: string) {
		text === "Monthly billing" && pricePlanState.toMonth();
		text === "Yearly billing" && pricePlanState.toYear();
	}

	return (
		<Container>
			<Header />
			<Content>
				<PricePlans>
					<PricePlansHead>
						<Title>Pricing Plans</Title>
						<Subtitle>Get 2 months for free by subscribing yearly!</Subtitle>
						<SwitchBlock
							leftText="Monthly billing"
							rightText="Yearly billing"
							stateFunc={changePlan}
						/>
					</PricePlansHead>
					<PricePlansList items={pricePlans} rateState={pricePlanState.state} />
				</PricePlans>
				<PricingSectionLayout title="Add-ons">
					{priceAddOnsItems.map((addOn, index) =>
						addOn.subtitle ? (
							<PriceAddOnInput {...addOn} key={index} />
						) : (
							<PriceAddOnStatic {...addOn} key={index} />
						)
					)}
				</PricingSectionLayout>
				<PricingSectionLayout title="Pricing FAQs"></PricingSectionLayout>
			</Content>
			<Footer BG="rgb(244 244 245)" colorText="black" />
		</Container>
	);
});

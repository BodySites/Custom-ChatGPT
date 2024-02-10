import React from "react";
import styled from "styled-components";
import { IPricePlan } from "../api/IPricePlan.tsx";
import { PriceBlockLayout } from "../../../widgets/layout/PriceBlockLayout.tsx";
import square from "../../../../public/icons/square-for-list.svg";
import check from "../../../../public/icons/check-mark.svg";
import { LinkButtonBlack } from "../../../shared/ui/LinkButton/LinkButtonBlack.tsx";

const Title = styled.h2`
	font-size: 1.35rem;
	font-weight: 600;
	line-height: 1.5rem;
	color: rgb(0 0 0);
`;

const List = styled.ul`
	padding: 1rem 0;
`;

const ListElem = styled.li`
	margin-bottom: 0.75rem;
	display: flex;
	align-items: center;
`;

const ListElSvg = styled.img`
	flex-shrink: 0;
`;

const TextEl = styled.span`
	font-size: 0.85rem;
	line-height: 1.25rem;
	font-weight: 600;
	color: rgb(63 63 70);
	margin-left: 0.5rem;
`;

const Price = styled.div`
	margin: 2rem 0;
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 700;
`;

const PriceText = styled.span`
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 500;
	color: rgb(24 24 27);
`;

export const PricePlanBlock: React.FC<IPricePlan> = ({
	title,
	list,
	price,
	rate,
	isFree
}) => {
	return (
		<PriceBlockLayout>
			<div>
				<Title>{title}</Title>
				<List>
					{list.map((listEl, index) => (
						<ListElem key={index}>
							<ListElSvg
								src={isFree ? square : check}
								alt="\/"
								style={
									isFree
										? { height: "0.5rem", width: "0.5rem" }
										: { height: "1.25rem", width: "1.25rem" }
								}
							/>
							<TextEl>{listEl}</TextEl>
						</ListElem>
					))}
				</List>
			</div>
			<div>
				<Price>
					$
					{rate === "Monthly billing"
						? price.toLocaleString("ru-RU")
						: (price * 10).toLocaleString("ru-RU")}
					{!isFree ? (
						<PriceText>
							{rate === "Monthly billing" ? "/month" : "/year"}
						</PriceText>
					) : (
						""
					)}
				</Price>
				<LinkButtonBlack>
					{isFree ? "Get Started" : "Subscribe"}
				</LinkButtonBlack>
			</div>
		</PriceBlockLayout>
	);
};

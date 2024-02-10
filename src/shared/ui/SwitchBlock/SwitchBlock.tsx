import React, { useState } from "react";
import styled, { StyledObject } from "styled-components";

const Container = styled.div`
	display: flex;
	border-radius: 0.5rem;
	border: 1px solid rgb(228 228 231);
	background-color: rgb(244 244 245);
	padding: 0.125rem;
`;

const Button = styled.button`
	margin: 0.25rem;
	display: inline-flex;
	height: 2.25rem;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	border-radius: 0.375rem;
	padding: 0.5rem 2rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(82 82 91);
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

	&:focus {
		border: 2px solid rgba(139, 92, 246, 0.5);
	}

	@media screen and (max-width: 640px) {
		width: 50%;
		padding: 0.5rem 1rem;
	}
	@media screen and (max-width: 400px) {
		padding: 0.5rem;
	}
`;

const activeStyles: StyledObject = {
	color: "black",
	backgroundColor: "rgb(212 212 216)",
	boxShadow: "0 1px 2px 0 rgba(0,0,0,.05)"
};

interface Props {
	leftText: string;
	rightText: string;
	stateFunc?: (s: string) => void;
}

export const SwitchBlock: React.FC<Props> = ({
	leftText,
	rightText,
	stateFunc
}) => {
	const [activeSwitch, setActiveSwitch] = useState(leftText);

	return (
		<Container>
			<Button
				style={activeSwitch === leftText ? activeStyles : {}}
				onClick={() => {
					if (activeSwitch !== leftText) {
						setActiveSwitch(leftText);
						stateFunc && stateFunc(leftText);
					}
				}}>
				{leftText}
			</Button>
			<Button
				style={activeSwitch === rightText ? activeStyles : {}}
				onClick={() => {
					if (activeSwitch !== rightText) {
						setActiveSwitch(rightText);
						stateFunc && stateFunc(rightText);
					}
				}}>
				{rightText}
			</Button>
		</Container>
	);
};

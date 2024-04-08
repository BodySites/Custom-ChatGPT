import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { LinkButtonBlack } from "../../shared/ui/LinkButton/LinkButtonBlack";
import google from "../../../public/icons/google.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.7rem;
	margin: 0 auto;
	max-width: 32rem;

	@media screen and (min-width: 640px) {
		width: 350px;
	}
`;

const Title = styled.h1`
	text-align: center;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	letter-spacing: -0.025em;
`;

const HrBlock = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1rem;

	& > div:first-child {
		width: 100%;
		height: 1px;
		background: #e5e7eb;
	}
	& > div:last-child {
		content: "";
		position: absolute;
		display: block;
		font-size: 0.75rem;
		line-height: 1rem;
		text-transform: uppercase;
		background: white;
		padding: 0 0.5rem;
	}
`;

const ProviderIcon = styled.img`
	margin-right: 0.5rem;
	height: 1.25rem;
	width: 1.25rem;
`;

const Info = styled.div`
	padding: 0 2rem;
	text-align: center;
	font-size: 0.8rem;
	line-height: 1.25rem;
`;

const InfoLink = styled.a`
	color: inherit;
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration: underline;
	}
`;

interface Props {
	title: string;
	children?: React.ReactNode;
	enterGoogle: (e: SyntheticEvent) => void;
}

export const AuthLayout: React.FC<Props> = ({
	title,
	children,
	enterGoogle
}) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
			<HrBlock>
				<div></div>
				<div>Or continue with</div>
			</HrBlock>
			<LinkButtonBlack onClick={enterGoogle}>
				<ProviderIcon src={google} alt="google" />
				Google
			</LinkButtonBlack>
			<Info>
				By continuing, you agree to our{" "}
				<InfoLink href="">Terms of Service</InfoLink> and{" "}
				<InfoLink href="">Privacy Policy</InfoLink>.
			</Info>
		</Container>
	);
};

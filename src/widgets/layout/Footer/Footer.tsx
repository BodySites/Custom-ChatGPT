import React from "react";
import styled from "styled-components";
import logoIcon from "../../../../public/icons/logo-circle.svg";
import inWhite from "../../../../public/icons/in-white.svg";
import inBlack from "../../../../public/icons/in-black.svg";
import { LinkButton } from "../../../shared/ui/LinkButton/LinkButton";

const Container = styled.footer`
	isolation: isolate;
`;

const SiteSection = styled.section`
	margin: 0 4rem;
	padding: 3rem 1.5rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 1000px) {
		margin: 0;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
`;

const Logo = styled.a`
	display: flex;
	flex: 0 1 auto;
	align-items: center;
	margin-right: 6rem;
	margin-bottom: 1.5rem;
	gap: 0.25rem;
	color: inherit;
`;

const Img = styled.img`
	height: 2rem;
	width: 2rem;
`;

const Text = styled.div`
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 400;
`;

const Link = styled.a`
	font-size: 0.8rem;
	line-height: 1.25rem;
	color: inherit;
`;

const Right = styled.a`
	display: flex;
	height: 2.5rem;
	align-items: center;
`;

const Support = styled.div`
	border-top: 1px solid rgb(39 39 42);
	padding: 1.5rem 5.5rem;
	display: flex;

	@media screen and (max-width: 1000px) {
		padding: 1.5rem;
	}
`;

interface Props {
	BG?: string;
	colorText?: string;
}

export const Footer: React.FC<Props> = ({
	BG = "rgb(24 24 27)",
	colorText = "white"
}) => {
	return (
		<Container style={{ backgroundColor: BG, color: colorText }}>
			<SiteSection>
				<Left>
					<Logo href="/">
						<Img src={logoIcon} alt="Logo" />
						<Text>Chatbase</Text>
					</Logo>
					<Link href="" target="_blank">
						Privacy Policy
					</Link>
					<Link href="" target="_blank">
						Terms of Service
					</Link>
				</Left>
				<Right href="" target="_blank">
					<img src={colorText === "white" ? inWhite : inBlack} alt="In" />
				</Right>
			</SiteSection>
			<Support>
				{colorText === "white" ? (
					<LinkButton Color="white" BGHover="rgb(39 39 42)">
						Contact Support
					</LinkButton>
				) : (
					<LinkButton Color="black" BGHover="rgb(228 228 231)">
						Contact Support
					</LinkButton>
				)}
			</Support>
		</Container>
	);
};

import React from "react";
import styled from "styled-components";
import logoIcon from "../../../../public/icons/logo-circle.svg";
import inIcon from "../../../../public/icons/in.svg";

const Container = styled.div`
	z-index: 30;
	isolation: isolate;
	background-color: rgb(24 24 27);
	color: rgb(255 255 255);
`;

const SiteSection = styled.section`
	margin: 0 4rem;
	padding: 3rem 1.5rem;
	display: flex;
	justify-content: space-between;
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
	color: white;
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
	color: white;
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
`;

const Button = styled.a`
	display: flex;
	height: 2.25rem;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	border-radius: 0.25rem;
	border: 1px solid rgb(39 39 42);
	padding: 0.25rem 0.5rem;
	font-size: 0.8rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(255 255 255);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.15s;

	&:hover {
		background-color: rgb(39 39 42);
	}
`;

export const Footer: React.FC = () => {
	return (
		<Container>
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
					<img src={inIcon} alt="In" />
				</Right>
			</SiteSection>
			<Support>
				<Button href="" target="_blank">
					Contact Support
				</Button>
			</Support>
		</Container>
	);
};

import React from "react";
import styled from "styled-components";
import logo from "../../../../public/icons/logo-circle.svg";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1.5rem;
	gap: 1rem;

	@media screen and (max-width: 480px) {
		padding: 0.5rem;
	}
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0.5rem;
	gap: 0.625rem;
`;

const Logo = styled.a`
	& > img {
		width: 2rem;
		height: 2rem;
	}
`;

const Slash = styled.div`
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 100;
	color: rgb(212 212 216);
`;

const Link = styled.a`
	color: rgb(9 9 11);
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.5rem;
`;

const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
`;

const ButtonLink = styled.a`
	padding: 0.5rem;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.5rem;
	color: rgb(82 82 91);

	&:hover {
		color: rgb(15 23 42);
	}

	@media screen and (max-width: 530px) {
		font-size: 0.8rem;
		padding: 0.5rem 0.3rem;
		& > span {
			display: none;
		}
	}
`;

interface Props {
	border?: string;
}

export const HeaderChatbots: React.FC<Props> = ({ border }) => {
	return (
		<Container style={{ borderBottom: border }}>
			<Navigation>
				<Logo href="/">
					<img src={logo} alt="Logo" />
				</Logo>
				<Slash>/</Slash>
				<Link href="/Custom-ChatGPT/my-chatbots">Chatbots</Link>
			</Navigation>
			<Buttons>
				<ButtonLink href="">Help</ButtonLink>
				<ButtonLink href="/Custom-ChatGPT/account">
					Account <span> →</span>
				</ButtonLink>
			</Buttons>
		</Container>
	);
};

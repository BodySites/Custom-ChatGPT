import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../../../../public/icons/logo-circle.svg";

const Container = styled.header`
	border: 0 solid #e5e7eb;
	background-color: #fff;
	position: sticky;
	top: 0;
	z-index: 10;
	isolation: isolate;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
`;

const Logo = styled.a`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	gap: 0.25rem;
`;

const LogoImg = styled.img`
	width: 32px;
	height: 32px;
`;

const LogoTitle = styled.div`
	font-weight: 400;
	font-size: 1.1rem;
	line-height: 2;
	color: black;
`;

const Links = styled.nav`
	display: flex;
	gap: 3.5rem;
	align-items: center;
	flex-wrap: nowrap;
`;

const Link = styled.a`
	font-size: 0.875rem;
	font-weight: 500;
	color: #1b1b1b;
`;

const Profile = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 1rem;
`;

const Reg = styled.a`
	border-radius: 0.375rem;
	padding: 0.75rem 0.75rem;
	font-size: 0.875rem;
	font-weight: 500;
	background-color: black;
	color: #eeeeee;

	&:hover {
		background-color: #000000d9;
	}
`;

const Auth = styled.a`
	font-size: 0.875rem;
	font-weight: 600;
	color: black;
`;

export const Header: React.FC = () => {
	const cont = useRef<null | HTMLDivElement>(null);

	window.addEventListener("scroll", () => {
		if (window.scrollY <= 1 && cont.current)
			cont.current.style.borderBottomWidth = `${window.scrollY}px`;
		else if (cont.current) cont.current.style.borderBottomWidth = `1px`;
	});

	return (
		<Container ref={cont}>
			<Logo href="/">
				<LogoImg src={logo} alt="Chatbase" loading="lazy" />
				<LogoTitle>Chatbase</LogoTitle>
			</Logo>
			<Links>
				<Link href="/" target="_blank">
					Affiliate
				</Link>
				<Link href="/" target="_blank">
					Pricing
				</Link>
				<Link href="/" target="_blank">
					Resources
				</Link>
			</Links>
			<Profile>
				<Auth href="/">Log in</Auth>
				<Reg href="/">
					Try for Free <span>→</span>
				</Reg>
			</Profile>
		</Container>
	);
};

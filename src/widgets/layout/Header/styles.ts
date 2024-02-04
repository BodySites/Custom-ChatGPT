import styled from "styled-components";

const Container = styled.header`
	border: 0 solid #e5e7eb;
	background-color: #fff;
	position: sticky;
	position: -webkit-sticky;
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

	@media screen and (max-width: 1000px) {
		gap: 0.8rem;
		width: 100%;
		flex-direction: column;
		margin-bottom: 1rem;
	}
`;

const Link = styled.a`
	font-size: 0.875rem;
	font-weight: 500;
	color: #1b1b1b;

	@media screen and (max-width: 1000px) {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		padding: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		transition-property: all;
		transition-duration: 75ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			background-color: #e4e4e4;
			color: rgb(109 40 217);
		}
	}
`;

const Profile = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 1rem;

	@media screen and (max-width: 1000px) {
		width: 100%;
		flex-direction: column;
		border-top: 1px solid #d9d9d9;
	}
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

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

const Auth = styled.a`
	font-size: 0.875rem;
	font-weight: 600;
	color: black;

	@media screen and (max-width: 1000px) {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		padding: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		transition-property: all;
		transition-duration: 75ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			background-color: #e4e4e4;
			color: rgb(109 40 217);
		}
	}
`;

export const st = {
	Container,
	Logo,
	LogoImg,
	LogoTitle,
	Links,
	Link,
	Profile,
	Reg,
	Auth
};

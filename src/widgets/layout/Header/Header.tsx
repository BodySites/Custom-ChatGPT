import React, { useEffect, useRef, useState } from "react";
import { st } from "./styles.ts";
import styles from "./style.module.css";
import logo from "../../../../public/icons/logo-circle.svg";
import classNames from "classnames";
import Media from "react-media";
import { auth } from "../../../app/FireBase.ts";
import { onAuthStateChanged } from "firebase/auth";

export const Header: React.FC = () => {
	const cont = useRef<null | HTMLDivElement>(null);
	const [activeBurger, setActiveBurger] = useState(false);
	const [adaptiveContent, setAdaptiveContent] = useState(
		<>
			<st.Links>
				<st.Link href="/" target="_blank">
					Affiliate
				</st.Link>
				<st.Link href="/Custom-ChatGPT/prices">Pricing</st.Link>
				<st.Link href="/" target="_blank">
					Resources
				</st.Link>
			</st.Links>
			<div></div>
		</>
	);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				changeAdaptive(true);
			} else {
				changeAdaptive(false);
			}
		});
	}, []);

	function changeAdaptive(isAuth: boolean) {
		setAdaptiveContent(
			<>
				<st.Links>
					<st.Link href="/" target="_blank">
						Affiliate
					</st.Link>
					<st.Link href="/Custom-ChatGPT/prices">Pricing</st.Link>
					<st.Link href="/" target="_blank">
						Resources
					</st.Link>
				</st.Links>
				{!isAuth ? (
					<st.Profile>
						<st.Auth href="/Custom-ChatGPT/signIn">Log in</st.Auth>
						<st.Reg href="/Custom-ChatGPT/signUp">
							Try for Free <span>→</span>
						</st.Reg>
					</st.Profile>
				) : (
					<st.LinkChatBots href="/Custom-ChatGPT/my-chatbots">
						Chatbots →
					</st.LinkChatBots>
				)}
			</>
		);
	}

	useEffect(() => {
		activeBurger
			? document.body.classList.add("lock")
			: document.body.classList.remove("lock");
	}, [activeBurger]);

	window.addEventListener("scroll", () => {
		if (window.scrollY <= 1 && cont.current)
			cont.current.style.borderBottomWidth = `${window.scrollY}px`;
		else if (cont.current) cont.current.style.borderBottomWidth = `1px`;
	});

	return (
		<st.Container ref={cont}>
			<st.Logo href="/">
				<st.LogoImg src={logo} alt="Chatbase" />
				<st.LogoTitle>Chatbase</st.LogoTitle>
			</st.Logo>
			<Media query="(max-width: 1000px)">
				{matches =>
					matches ? (
						<div
							className={classNames(
								styles.AdaptiveContainer,
								activeBurger ? styles.active : ""
							)}>
							{adaptiveContent}
						</div>
					) : (
						adaptiveContent
					)
				}
			</Media>
			<div
				className={classNames(styles.Burger, activeBurger ? styles.active : "")}
				onClick={() => {
					activeBurger ? setActiveBurger(false) : setActiveBurger(true);
				}}></div>
		</st.Container>
	);
};

import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { HeaderChatbots } from "../../widgets/layout/Header/HeaderChatbots";
import { InfoBlockLayout } from "../../widgets/layout/InfoBlockLayout";
import styles from "./styles.module.css";
import { Logout } from "../../features/Logout";
import { TextInput } from "../../shared/ui/Input/TextInput";
import { ChatbotButtonBlack } from "../../shared/ui/ChatbotButton/ChatbotButtonBlack";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../app/FireBase";
import {
	changeEmail,
	changeName,
	delUser
} from "../../entities/user/api/userAPI";
import { pricePlans } from "../../widgets/PriceList/pricePlansObject";
import { ChatbotButtonRed } from "../../shared/ui/ChatbotButton/ChatbotButtonRed";

const Container = styled.div``;

const Content = styled.div`
	margin: 0 auto;
	display: flex;
	width: 100%;
	max-width: 768px;
	flex-direction: column;
	gap: 1.5rem;
	padding: 0 1.5rem 4rem;
`;

const Form = styled.form`
	padding: 1.5rem;
	padding-top: 0;
`;

const FormDesc = styled.p`
	margin-bottom: 0.5rem;
	font-size: 0.8rem;
	color: rgb(113 113 122);
	line-height: 1.4rem;
`;

const FormArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;

	& > div {
		flex: 1 1;
	}
`;

const BlockLayout = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	padding-top: 0;
`;

const ButtonLayout = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 1.5rem;
	padding-top: 0;
`;

const SubscribeTitle = styled.div`
	font-size: 0.875rem;
	line-height: 1.25rem;
	letter-spacing: -0.025em;

	& > div {
		margin: 0 0.25rem;
		display: inline-flex;
		align-items: center;
		border-radius: 0.375rem;
		background-color: rgb(237 233 254);
		padding: 0.19rem 0.625rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: rgb(124 58 237);
		transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
	& > div:hover {
		background-color: rgba(237, 233, 254, 0.8);
	}
	& > span {
		font-weight: 600;
	}
`;

const current = new Date();
current.setMonth(current.getMonth() + 1);
const monthTxt = current.toLocaleString("default", { month: "long" });

export const AccountPage: React.FC = () => {
	const [userInfo, setUserInfo] = useState<User | null>(null);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUserInfo(user);
			}
		});
	}, []);

	async function updateEmail(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (userInfo) {
			// let [isAuth, isChange] = await changeEmail(
			// 	e.currentTarget.email.value,
			// 	userInfo
			// );
		}
	}

	async function updateName(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		userInfo &&
			userInfo.displayName !== e.currentTarget.username.value &&
			changeName(e.currentTarget.username.value, userInfo);
	}

	async function deleteAccount(e: SyntheticEvent) {
		e.preventDefault();
		// userInfo && delUser(userInfo);
	}

	return (
		<Container>
			<HeaderChatbots />
			<Content>
				<Logout />
				<InfoBlockLayout title="Email">
					<Form method="post" onSubmit={updateEmail}>
						<FormDesc>
							Please enter the email address you want to use to log in with.
						</FormDesc>
						<FormArea>
							<TextInput
								type="text"
								name="email"
								placeholder="Enter a valid email."
								autoComplete="off"
								labelDisable
								title=""
								valueDefault={userInfo?.email ? userInfo.email : ""}
							/>
							<ChatbotButtonBlack minWidth="7rem">Update</ChatbotButtonBlack>
						</FormArea>
					</Form>
				</InfoBlockLayout>
				<InfoBlockLayout title="Display Name">
					<Form method="post" onSubmit={updateName}>
						<FormDesc>
							Enter your full name or a comfortable display name.
						</FormDesc>
						<FormArea>
							<TextInput
								type="text"
								name="username"
								placeholder="Enter your name."
								autoComplete="off"
								labelDisable
								title=""
								valueDefault={userInfo?.displayName ? userInfo.displayName : ""}
							/>
							<ChatbotButtonBlack minWidth="7rem">Update</ChatbotButtonBlack>
						</FormArea>
					</Form>
				</InfoBlockLayout>
				<InfoBlockLayout title="Subscription Details">
					<BlockLayout>
						<SubscribeTitle>
							You are on the <div>FREE</div> plan for <span>free forever</span>
						</SubscribeTitle>
						<div className={styles.hrTwo}></div>
						<ul className={styles.subscribeList}>
							{pricePlans[0].list.map((priceItem, index) => (
								<li key={index}>{priceItem}</li>
							))}
						</ul>
					</BlockLayout>
					<ButtonLayout>
						<ChatbotButtonBlack>Subscribe Now</ChatbotButtonBlack>
					</ButtonLayout>
				</InfoBlockLayout>
				<InfoBlockLayout title="Usage">
					<BlockLayout>
						<div className={styles.usageBlock}>
							<p>
								Messages consumed: <span>0/20</span>
							</p>
							<p>Your credits renew at the start of every calendar month.</p>
							<p>
								Next renewal: <span>{monthTxt} 1st</span>
							</p>
						</div>
					</BlockLayout>
				</InfoBlockLayout>
				<div className={styles.hr}>
					<span>Danger Zone</span>
				</div>
				<InfoBlockLayout
					title="Delete Account"
					colorTitle="rgb(239 68 68)"
					borderColor="rgb(254 202 202)">
					<BlockLayout>
						<div className={styles.deleteText}>
							Once you delete your account, there is no going back. Please be
							certain. <br />
							All your uploaded data and trained chatbots will be deleted.{" "}
							<span>This action is not reversible</span>
						</div>
					</BlockLayout>
					<ButtonLayout>
						<ChatbotButtonRed onClick={deleteAccount}>
							Delete Your Account
						</ChatbotButtonRed>
					</ButtonLayout>
				</InfoBlockLayout>
			</Content>
		</Container>
	);
};

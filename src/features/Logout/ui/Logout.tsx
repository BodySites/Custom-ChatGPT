import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../../app/FireBase";
import logout from "../../../../public/icons/signout.svg";

const Container = styled.div`
	display: flex;
	justify-content: flex-end;

	& > button {
		display: inline-flex;
		height: 2.5rem;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		border-radius: 0.375rem;
		background-color: rgb(244 244 245);
		padding: 0 2rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: rgb(24 24 27);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
	& > button:hover {
		background-color: hsla(240, 6%, 90%, 0.9);
	}
	& > button:disabled {
		pointer-events: none;
		opacity: 0.8;
	}
`;

const SignoutIcon = styled.img`
	margin-left: 1rem;
`;

export const Logout: React.FC = () => {
	const navigate = useNavigate();

	function exit() {
		signOut(auth)
			.then(() => {
				navigate("/Custom-ChatGPT");
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<Container>
			<button onClick={exit}>
				Signout <SignoutIcon src={logout} alt="logout" />
			</button>
		</Container>
	);
};

import React from "react";
import styled from "styled-components";
import { IReview } from "../api/IReview.tsx";
import linkIcon from "../../../../public/icons/X.svg";

const Container = styled.figure`
	border-radius: 1rem;
	background-color: rgb(24 24 27);
	padding: 1.5rem;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -4px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.5rem;

	& > div {
		display: flex;
		justify-content: flex-end;
	}
`;

const Link = styled.img`
	display: block;
	color: rgb(29 161 242);
`;

const Signature = styled.figcaption`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	line-height: 1rem;
`;

const Image = styled.img`
	display: block;
	max-width: 100%;
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 50%;
	background-color: rgb(250 250 250);
`;

const Name = styled.div`
	font-weight: 600;
	color: rgb(250 250 250);
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
`;

const Tags = styled.div`
	color: rgb(161 161 170);
	font-size: 0.875rem;
`;

const Text = styled.blockquote`
	color: rgb(250 250 250);
`;

export const ReviewBlock: React.FC<IReview> = ({
	avatar,
	name,
	text,
	tags
}) => {
	return (
		<Container>
			<div>
				<a href="" target="_blank">
					<Link src={linkIcon} alt="Link" />
				</a>
			</div>
			<Text>{text}</Text>
			<Signature>
				<Image src={avatar} alt="Photo" loading="lazy" />
				<div>
					<Name>{name}</Name>
					<Tags>{tags}</Tags>
				</div>
			</Signature>
		</Container>
	);
};

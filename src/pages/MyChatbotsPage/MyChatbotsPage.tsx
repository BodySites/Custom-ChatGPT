import React from "react";
import styled from "styled-components";
import { HeaderChatbots } from "../../widgets/layout/Header/HeaderChatbots";
import { ChatbotButtonBlack } from "../../shared/ui/ChatbotButton/ChatbotButtonBlack";

const Container = styled.div``;

const Content = styled.div`
	padding: 2rem 0.75rem 5rem;
	margin: 0 auto;
	max-width: 48rem;
`;

const TitleBlock = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h1`
	margin: 2rem 0;
	font-weight: 700;
	color: rgb(0 0 0);
	font-size: 1.875rem;
	line-height: 2.25rem;
`;

const ChatBots = styled.div`
	padding: 4rem 0;
	display: flex;
	justify-content: center;
`;

interface Props {}

export const MyChatbotsPage: React.FC<Props> = () => {
	return (
		<Container>
			<HeaderChatbots border="1px solid #e5e7eb" />
			<Content>
				<TitleBlock>
					<Title>Chatbots</Title>
				</TitleBlock>
				<ChatBots>
					<ChatbotButtonBlack>New Chatbot</ChatbotButtonBlack>
				</ChatBots>
			</Content>
		</Container>
	);
};

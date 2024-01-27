import imgOne from "../../../public/content/chat-gray.png";
import imgTwo from "../../../public/content/chat-gray-with-email.png";
import imgThree from "../../../public/content/three-chats.png";
import imgFour from "../../../public/content/languages.png";

import { ICase } from "../../features/CaseBlock";

export const caseItems: ICase[] = [
	{
		img: imgOne,
		title: "Customer Support",
		description: `Experience swift query resolutions, available 24/7, with personalized assistance tailored to your customers' needs.`
	},
	{
		img: imgTwo,
		title: "Lead Generation",
		description:
			"Set your chatbot to collect leads and qualify them, all while providing a personalized experience to your customers."
	},
	{
		img: imgThree,
		title: "AI Personas to Engage Your Users",
		description:
			"Create AI personas about any topic and have them engage with your users and provide them with a personalized experience."
	},
	{
		img: imgFour,
		title: "Multi-platform Chatbots",
		description:
			"Add AI chatbots to your website, mobile app, or any other platform with a simple embed code or with our API."
	}
];

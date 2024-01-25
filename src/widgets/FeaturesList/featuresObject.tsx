import imgOne from "../../../public/content/chat-black.png";
import imgTwo from "../../../public/content/chat-white.png";
import imgThree from "../../../public/content/graph.png";
import iconOne from "../../../public/icons/cube.svg";
import iconTwo from "../../../public/icons/brush.svg";
import iconThree from "../../../public/icons/note.svg";
import iconFour from "../../../public/icons/fingerprint.svg";
import iconFive from "../../../public/icons/refresh.svg";
import iconSix from "../../../public/icons/puzzle.svg";
import iconSeven from "../../../public/icons/stars.svg";
import iconEight from "../../../public/icons/lang-icon.svg";

import { IFeature } from "../../features/FeatureBlock";

export const featureImageItems: IFeature[] = [
	{
		img: imgOne,
		title: "Trustworthy, Accurate Answers",
		description: `With features like "Revise answers" and "Confidence score" you can be sure your chatbot is giving the right answers.`
	},
	{
		img: imgTwo,
		title: "Lead Generation Engine",
		description:
			"Collect leads and gather your customer's data, all while providing a personalized experience."
	},
	{
		img: imgThree,
		title: "Advanced Analytics",
		description:
			"Get insights into your chatbot’s interactions with your customers and use them to improve its performance."
	}
];

export const featureIconItems: IFeature[] = [
	{
		img: iconOne,
		title: "Multiple Data Sources",
		description: `Import data from multiple sources to train your chatbot.`
	},
	{
		img: iconTwo,
		title: "Customizations",
		description:
			"Customize your chatbot’s look and feel to match your brand’s style and website design."
	},
	{
		img: iconThree,
		title: "Whitelabel",
		description: "Remove Chatbase branding and use a custom domain."
	},
	{
		img: iconFour,
		title: "Privacy & Security",
		description:
			"Your data is hosted on secure servers with robust encryption and access control."
	},
	{
		img: iconFive,
		title: "Auto-Retrain",
		description:
			"Set your chatbot to retrain automatically and always be synced with your data."
	},
	{
		img: iconSix,
		title: "Integrations",
		description:
			"Connect your chatbot to your favorite tools like Slack, WhatsApp Zapier, and more."
	},
	{
		img: iconSeven,
		title: "Powerful AI Models",
		description:
			"Choose from a variety of AI models, including GPT-3.5-turbo and GPT-4."
	},
	{
		img: iconEight,
		title: "80+ Languanges",
		description:
			"Reach your customers in their native language even if your data is in a different language."
	}
];

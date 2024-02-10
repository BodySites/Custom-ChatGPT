import { IPricePlan } from "../../features/PricePlanBlock";

export const pricePlans: IPricePlan[] = [
	{
		title: "Free",
		list: [
			"20 message credits/month",
			"1 chatbot",
			"400,000 characters/chatbot",
			"Limit to 10 links to train on",
			"Embed on unlimited websites",
			"Upload multiple files",
			"View conversation history",
			"Chatbots get deleted after 7 days of inactivity"
		],
		price: 0,
		isFree: true,
		rate: "Monthly billing"
	},
	{
		title: "Hobby",
		list: [
			"2,000 message credits/month",
			"2 chatbots",
			"11,000,000 characters/chatbot",
			"Unlimited links to train on",
			"Embed on unlimited websites",
			"Upload multiple files",
			"View conversation history",
			"Capture leads",
			"API access",
			"Zapier integration",
			"Slack integration",
			"Wordpress integration",
			"WhatsApp integration",
			"Messenger integration (coming soon)"
		],
		price: 19,
		isFree: false,
		rate: "Monthly billing"
	},
	{
		title: "Standard",
		list: [
			"10,000 message credits/month",
			"5 chatbots",
			"11,000,000 characters/chatbot",
			"Unlimited links to train on",
			"Embed on unlimited websites",
			"Upload multiple files",
			"View conversation history",
			"Capture leads",
			"API access",
			"Zapier integration",
			"Slack integration",
			"Wordpress integration",
			"WhatsApp integration",
			"Messenger integration (coming soon)",
			"Option to Choose GPT-4"
		],
		price: 99,
		isFree: false,
		rate: "Monthly billing"
	},
	{
		title: "Unlimited",
		list: [
			"40,000 message credits/month included (Messages over the limit will use your OpenAI API Key)",
			"10 chatbots",
			"11,000,000 characters/chatbot",
			"Unlimited links to train on",
			"Embed on unlimited websites",
			"Upload multiple files",
			"View conversation history",
			"Capture leads",
			"API access",
			"Zapier integration",
			"Slack integration",
			"Wordpress integration",
			"WhatsApp integration",
			"Messenger integration (coming soon)",
			"Option to Choose GPT-4",
			"Remove 'Powered by Chatbase'",
			"Use your own custom domains"
		],
		price: 399,
		isFree: false,
		rate: "Monthly billing"
	}
];

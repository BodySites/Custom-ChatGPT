import { IPriceAddOn } from "../api/IPriceAddOn";

export const priceAddOnsItems: IPriceAddOn[] = [
	{
		title: "Extra message credits",
		subtitle: "$7 per 1000 msg credits/month",
		description: "extra msg credits every month",
		price: 7,
		defaultInputValue: 1000
	},
	{
		title: "Extra chatbots",
		subtitle: "$7 per 1 chatbots/month",
		description: "extra chatbot",
		price: 7,
		defaultInputValue: 1
	},
	{
		title: "Remove 'Powered By Chatbase'",
		description: "Remove the Chatbase branding from the iframe and widget",
		price: 39
	},
	{
		title: "Custom Domains",
		description:
			"Use your own custom domains for the embed script, iframe, and chatbot link",
		price: 59
	}
];

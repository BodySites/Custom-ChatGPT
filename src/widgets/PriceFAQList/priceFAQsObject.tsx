import { IPriceFAQ } from "../../features/PriceFAQ/api/IPriceFAQ";

export const priceFAQsItems: IPriceFAQ[] = [
	{
		title: "Is there a free plan?",
		description:
			"Yes, just by signing up you get 20 message credits and 1 chatbot (400k characters). You can use these to test out chatbase and see if it works for you."
	},
	{
		title: "How do message credits work?",
		description:
			"One AI response with gpt-3.5-turbo (the default) costs 1 message credit. One AI response with gpt-4 costs 20 message credits. You can change which model your chatbot uses in the chatbot settings. The difference is because gpt-4 costs 15x (prompt tokens) and 30x (completion tokens) what gpt-3.5-turbo costs on OpenAI."
	},
	{
		title: "What counts as one chatbot?",
		description:
			"One chatbot means a chatbot that contains specific data and can answer any question about this data. Even if it was created using multiple documents."
	},
	{
		title: "How many users can use my chatbot?",
		description:
			"If your chatbot is private, only you have access to it. If you decide to make it public, anyone with the link will be able to interact with it."
	},
	{
		title: "When are my message credits renewed?",
		description:
			"Your message credits are renewed at the start of every calendar month regardless of when you subscribed. So if you subscribe on the 15th of March, your credits will be renewed on the 1st of April."
	},
	{
		title: "How do I know how many characters are in my document?",
		description:
			"Once you attach your document(s) for upload, chatbase will show you the character count of all the attached documents."
	},
	{
		title: "Can I upload multiple files to one chatbot?",
		description:
			"Yes, if you have a paid plan you can upload multiple files to one chatbot. Just click ctrl (windows) or cmd (mac) and select as many files as you want."
	},
	{
		title: "How much data can I give one chatbot?",
		description:
			"Free plan: 400K Characters (~5MB) | Hobby/Standard/Unlimited: 11M Characters (~140MB)"
	},
	{
		title: "How does the unlimited plan work?",
		description:
			"You get 40,000 message credits included in the plan when you subscribe. Every message after that will use your OpenAI API key that you can add in your account page. So you get the cheapest possible price per message after you hit the limit."
	}
];

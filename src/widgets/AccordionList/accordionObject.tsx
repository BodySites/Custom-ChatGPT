import imgOne from "../../../public/content/chat-gray-with-data.png";
import imgTwo from "../../../public/content/two-chats.webp";
import imgThree from "../../../public/content/one-chat-and-monitor.webp";
import imgFour from "../../../public/content/add-to.webp";

export interface IAccordion {
	id: number;
	img: string;
	title: string;
	description: string;
}

const accordionItems: IAccordion[] = [
	{
		id: 1,
		img: imgOne,
		title: "Import your data",
		description:
			"Connect your data sources, upload files, or add a website for crawling, and Chatbase will use all of that data to train your chatbot."
	},
	{
		id: 2,
		img: imgTwo,
		title: "Customize behavior & appearance",
		description:
			"Make your chatbot look like it's part of your website with custom colors and logos and make it match your brand's personality with custom instructions"
	},
	{
		id: 3,
		img: imgThree,
		title: "Embed on your website",
		description: "Add a chat widget to any website with a simple embed code."
	},
	{
		id: 4,
		img: imgFour,
		title: "Integrate with your tools",
		description:
			"Connect your chatbot to your favorite tools like Slack, WhatsApp Zapier, and more."
	}
];

export default accordionItems;

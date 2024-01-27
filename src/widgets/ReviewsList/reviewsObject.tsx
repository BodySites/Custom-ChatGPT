import imgOne from "../../../public/content/photo1.jpg";
import imgTwo from "../../../public/content/photo2.jpg";
import imgThree from "../../../public/content/photo3.jpg";
import imgFour from "../../../public/content/photo4.jpg";
import imgFive from "../../../public/content/photo5.png";

import { IReview } from "../../features/ReviewBlock";

export const reviewItems: IReview[] = [
	{
		text: "“This is awesome”",
		avatar: imgOne,
		name: "Jacob Andreou",
		tags: "SVP @Snap",
		styles: {
			lineHeight: "1.5rem",
			alignSelf: "flex-end"
		}
	},
	{
		text: "“For anyone on the fence - in the 2 hours since this tweet I've tested, set up and gone live on three separate websites with Chatbase. Still need to do some light tweaking of the base prompt but very happy with the results.”",
		avatar: imgTwo,
		name: "Ian Whiscombe",
		tags: "Founder @StockBuddy",
		styles: {
			gridArea: "span 2/span 2",
			fontWeight: 600,
			fontSize: "1.1rem",
			lineHeight: "1.9rem"
		}
	},
	{
		text: "“Another overpowered project built with the 🪄 OP stack”",
		avatar: imgThree,
		name: "Greg Kogan",
		tags: "VP @pinecone",
		styles: {
			lineHeight: "1.5rem"
		}
	},
	{
		text: "“This is awesome, thanks for building it!”",
		avatar: imgFour,
		name: "Logan.GPT",
		tags: "Dev Rel @OpenAI",
		styles: {
			lineHeight: "1.5rem",
			alignSelf: "flex-start"
		}
	},
	{
		text: "“Website embed works like a charm even with non-English content!”",
		avatar: imgFive,
		name: "Bence ☺︎ ☻",
		tags: "Designer @Nortal",
		styles: {
			lineHeight: "1.5rem"
		}
	}
];

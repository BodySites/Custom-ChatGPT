export interface IPricePlan {
	title: string;
	list: string[];
	price: number;
	rate: "Yearly billing" | "Monthly billing";
	isFree: boolean;
}

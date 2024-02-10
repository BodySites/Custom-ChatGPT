import { makeAutoObservable } from "mobx";

class PricePlanState {
	state: "Yearly billing" | "Monthly billing" = "Monthly billing";

	constructor() {
		makeAutoObservable(this);
	}

	toYear() {
		this.state = "Yearly billing";
	}

	toMonth() {
		this.state = "Monthly billing";
	}
}

export default new PricePlanState();

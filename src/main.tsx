import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback="Loading...">
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);

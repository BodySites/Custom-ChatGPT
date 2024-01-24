import React from "react";
import styles from "./styles.module.css";

interface Props {
	title?: string;
	text?: string;
	gap?: number;
	colorText?: string;
}

export const HeadSection: React.FC<Props> = ({
	title,
	text,
	gap = 0.25,
	colorText = "black"
}) => {
	return (
		<div className={styles.Container} style={{ gap: `${gap}rem` }}>
			<h4 className={styles.h4}>{title}</h4>
			<p className={styles.p} style={{ color: colorText }}>
				{text}
			</p>
		</div>
	);
};

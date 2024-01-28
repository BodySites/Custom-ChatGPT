import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IAccordion } from "./accordionObject";
import styles from "./styles.module.css";
import arrowRight from "../../../public/icons/arrow-right-bold.svg";
import classNames from "classnames";

const Container = styled.div`
	margin-top: 1.25rem;
	width: 100%;
	column-gap: 3.5rem;
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
`;

const Accordion = styled.div`
	grid-column: span 3 / span 3;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

const ImageContainer = styled.div`
	position: relative;
	grid-column: span 3 / span 3;
	height: 45rem;
	width: 100%;
	justify-content: center;
	display: flex;
`;

const ImageBG = styled.div`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100vw;
	border-radius: 0.375rem;
	background-color: rgb(0 0 0);
`;

interface Props {
	items: IAccordion[];
}

export const AccordionList: React.FC<Props> = ({ items }) => {
	const imgRef = useRef<HTMLImageElement | null>(null);
	const [opened, setOpened] = useState(0);

	function openItem(index: number) {
		if (index !== opened) {
			setOpened(index);
		}
	}

	useEffect(() => {
		imgRef.current?.classList.remove(styles.animated);
		setTimeout(() => imgRef.current?.classList.add(styles.animated), 0);
	}, [opened]);

	return (
		<Container>
			<Accordion>
				{items.map((item, index) => (
					<div
						className={classNames(
							styles.Item,
							index === opened ? styles.open : styles.close
						)}>
						<a
							className={styles.HeadItem}
							onClick={(e: SyntheticEvent) => {
								e.preventDefault();
								openItem(index);
							}}>
							<div className={styles.HeadItemLeft}>
								<div className={styles.ItemId}>{`0${item.id}`}</div>
								<div className={styles.ItemTitle}>{item.title}</div>
							</div>
							<img src={arrowRight} alt="открыть" />
						</a>
						<div className={styles.ItemDescription}>{item.description}</div>
					</div>
				))}
			</Accordion>
			<ImageContainer>
				<ImageBG />
				<img
					className={styles.ItemImg}
					src={items[opened].img}
					alt="Photo"
					ref={imgRef}
				/>
			</ImageContainer>
		</Container>
	);
};

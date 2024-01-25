import React from "react";
import styled from "styled-components";
import { Header } from "../../widgets/layout/Header/Header";
import bgimage from "../../../public/content/bg-image.png";
import styles from "./styles.module.css";
import { SectionLayout } from "../../widgets/layout/SectionLayout";
import { HeadSection } from "../../shared/ui/HeadSection/HeadSection";
import { AccordionList } from "../../widgets/AccordionList/AccordionList";
import accordionItems from "../../widgets/AccordionList/accordionObject";
import { FeaturesListImages } from "../../widgets/FeaturesList/FeaturesListImages";
import {
	featureIconItems,
	featureImageItems
} from "../../widgets/FeaturesList/featuresObject";
import { FeaturesListIcons } from "../../widgets/FeaturesList/FeaturesListIcons";

let Container = styled.div`
	background-color: #fff;
`;

const ContainerFeatures = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 4rem;
`;

const Line = styled.div`
	height: 0.15rem;
	width: 25%;
	align-self: center;
	background-image: radial-gradient(
		50% 50% at 50% 50%,
		#000 10%,
		#000 20%,
		rgba(124, 58, 237, 0) 100%
	);
`;

export const MainPage: React.FC = () => {
	return (
		<Container>
			<Header />
			<main className={styles.Main}>
				<section className={styles.Intro}>
					<div className={styles.IntroLeft}>
						<h1 className={styles.IntroTitle}>
							Custom ChatGPT for your website
						</h1>
						<p className={styles.IntroText}>
							Build a custom GPT, embed it on your website and let it handle
							customer support, lead generation, engage with your users, and
							more.
						</p>
						<div className={styles.IntroButtons}>
							<div className={styles.IntroButtonBuild}>
								<a href="/" target="_blank">
									Build your Chatbot <span>→</span>
								</a>
								<p className={styles.IntroButtonCard}>
									No credit card required
								</p>
							</div>
							<a href="/" className={styles.IntroButtonVideo}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
										clipRule="evenodd"></path>
								</svg>
								Watch Video
							</a>
						</div>
					</div>
					<div className={styles.IntroRight}>
						<img src={bgimage} alt="Картинка" />
					</div>
				</section>
				<SectionLayout>
					<HeadSection
						title="HOW IT WORKS"
						text="Add your data sources, train the AI, customize it to your liking, and add it to your website."
					/>
					<AccordionList items={accordionItems} />
				</SectionLayout>
				<SectionLayout>
					<HeadSection
						title="POWERFUL FEATURES"
						text="Everything you need for your no-code AI chatbot."
					/>
					<ContainerFeatures>
						<FeaturesListImages items={featureImageItems} />
						<Line />
						<FeaturesListIcons items={featureIconItems} />
					</ContainerFeatures>
				</SectionLayout>
			</main>
		</Container>
	);
};

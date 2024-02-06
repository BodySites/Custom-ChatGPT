import React, { SyntheticEvent, useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "../../widgets/layout/Header/Header";
import bgimage from "../../../public/content/bg-image.png";
import videoPage from "../../../public/content/studio-ai-landing.mp4";
import preview from "../../../public/content/landing-video.webp";
import start from "../../../public/icons/start-white.svg";
import integrations from "../../../public/content/sources.png";
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
import classNames from "classnames";
import { CasesList } from "../../widgets/CaseList/CasesList";
import { caseItems } from "../../widgets/CaseList/casesObject";
import { ReviewsList } from "../../widgets/ReviewsList/ReviewsList";
import { reviewItems } from "../../widgets/ReviewsList/reviewsObject";
import { Footer } from "../../widgets/layout/Footer/Footer";

const Container = styled.div`
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

const ImgIntegration = styled.img`
	display: block;
	max-width: 100%;
	height: auto;
	margin-top: 3.5rem;
	color: transparent;
`;

export const MainPage: React.FC = () => {
	const refVideo = useRef<HTMLVideoElement | null>(null);
	const [previewVisible, setPreviewVisible] = useState(true);
	const [background, setBackground] = useState(
		localStorage.getItem("BG") || "white"
	);

	function startVideo() {
		if (previewVisible) {
			if (refVideo.current) refVideo.current.play();
			setPreviewVisible(false);
		}
	}

	function toVideo() {
		if (refVideo.current) {
			window.scroll({
				top:
					refVideo.current.getBoundingClientRect().top +
					window.scrollY -
					window.innerHeight / 8,
				left: 0,
				behavior: "smooth"
			});
		}
	}

	function changeBG() {
		if (
			refVideo.current &&
			window.scrollY >
				window.scrollY +
					refVideo.current.getBoundingClientRect().top -
					window.innerHeight / 1.5
		) {
			if (background !== "black") setBackground("black");
		} else if (background !== "white") setBackground("white");
	}

	window.addEventListener("beforeunload", () => {
		background === "black"
			? localStorage.setItem("BG", "black")
			: localStorage.setItem("BG", "white");
	});
	window.addEventListener("load", changeBG);
	window.addEventListener("scroll", changeBG);

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
							<a
								href=""
								className={styles.IntroButtonVideo}
								onClick={(e: SyntheticEvent) => {
									e.preventDefault();
									toVideo();
								}}>
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
				<section className={styles.Video}>
					<video src={videoPage} muted controls loop ref={refVideo}></video>
					<div
						className={styles.preview}
						style={!previewVisible ? { display: "none" } : {}}>
						<img src={preview} alt="Preview" />
						<button className={styles.startVideo} onClick={startVideo}>
							<div>
								<img src={start} alt="Пуск" className={styles.start} />
								<span className={styles.circleSmall}></span>
								<span className={styles.circleBig}></span>
							</div>
						</button>
					</div>
				</section>
				<SectionLayout zIndex={30}>
					<HeadSection
						title="USECASES"
						text="Here are some of the ways you can use Chatbase."
						colorText="white"
					/>
					<CasesList items={caseItems} />
				</SectionLayout>
				<SectionLayout zIndex={30}>
					<HeadSection
						title="INTEGRATIONS"
						text="Ingest data from multiple sources, train your chatbot, and let your users interact with it wherever they are."
						colorText="white"
					/>
					<ImgIntegration
						src={integrations}
						alt="Integrations : Google Drive, Notion, Slack, Whatsapp, Messanger, Word,..."
						loading="lazy"
					/>
				</SectionLayout>
				<SectionLayout zIndex={30}>
					<HeadSection
						title="WHAT PEOPLE ARE SAYING"
						text="Chatbase is the easiest way to create a chatbot for your website. Don't take our word for it! Here's what people are saying."
						colorText="white"
					/>
					<ReviewsList items={reviewItems} />
				</SectionLayout>
				<section className={styles.Advert}>
					<div>
						<h2 className={styles.AdvertTitle}>
							Join the future of AI chatbots today
						</h2>
						<a href="/" target="_blank" className={styles.AdvertButton}>
							Try for Free <span>→</span>
						</a>
					</div>
				</section>
				<div
					className={classNames(
						styles.BGMain,
						background === "black" ? styles.black : ""
					)}></div>
			</main>
			<Footer />
		</Container>
	);
};

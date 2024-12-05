// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeFindAStore.module.scss";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTitle,
} from "../components/Accordian";
import { title } from "process";

// IMAGES //
import shelf from "public/img/HomeFindAStore/shelf.png";
import Vogue from "public/img/HomeFindAStore/Vogue.png";
import Marquee from "react-fast-marquee";
// DATA //

/** HomeFindAStore Section */
export default function HomeFindAStore() {
	const NetherlandsData = [
		{
			country: "Netherlands",
			locations: [
				{
					name: "Skin Skills",
					address: "Lübeckweg 2, 9723 HN Groningen, Netherlands",
				},
				{
					name: "Azzurro Due",
					address: "Van Baerlestraat 3, 1071 AL Amsterdam, Netherlands",
				},
				{
					name: "Crafthouse",
					address: "Deltapromenade 293, 2554 GX Den Haag, Netherlands",
				},
				{
					name: "Parfumerie Aura",
					address: "Dorpstraat 3, 2950 Kapellen, Belgium",
				},
			],
		},
		{
			country: "India",
			locations: [
				{
					name: "Skin Skills",
					address: "Lübeckweg 2, 9723 HN Groningen, Netherlands",
				},
				{
					name: "Azzurro Due",
					address: "Van Baerlestraat 3, 1071 AL Amsterdam, Netherlands",
				},
				{
					name: "Crafthouse",
					address: "Deltapromenade 293, 2554 GX Den Haag, Netherlands",
				},
				{
					name: "Parfumerie Aura",
					address: "Dorpstraat 3, 2950 Kapellen, Belgium",
				},
			],
		},
		{
			country: "USA",
			locations: [
				{
					name: "Skin Skills",
					address: "Lübeckweg 2, 9723 HN Groningen, Netherlands",
				},
				{
					name: "Azzurro Due",
					address: "Van Baerlestraat 3, 1071 AL Amsterdam, Netherlands",
				},
				{
					name: "Crafthouse",
					address: "Deltapromenade 293, 2554 GX Den Haag, Netherlands",
				},
				{
					name: "Parfumerie Aura",
					address: "Dorpstraat 3, 2950 Kapellen, Belgium",
				},
			],
		},
	];

	return (
		<section className={`${styles.HomeFindAStore} `}>
			<div className={styles.marqueeWrapper}>
				<Marquee>
					<h1 className="font_primary text_uppercase color_white text_md text_700">
						featured
					</h1>
					<Image src={Vogue} alt=""></Image>
					<Image src={Vogue} alt=""></Image>
					<Image src={Vogue} alt=""></Image>
				</Marquee>
			</div>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={`${styles.ImageDiv} col-xs-6`}>
						<Image src={shelf} alt=""></Image>
					</div>
					<div className={`${styles.textDiv} col-xs-6 `}>
						<Accordion>
							{/* Accordian Items using json */}
							{NetherlandsData.map((data, index) => (
								<AccordionItem key={index}>
									<AccordionTitle className="bg_primary">
										<div
											className={`${styles.country} color_white font_secondary text_700 text_sm text_uppercase `}
										>
											{data.country}
										</div>
									</AccordionTitle>
									<AccordionContent>
										<div className={styles.contentWrapper}>
											{data.locations.map((location, locIndex) => (
												<div key={locIndex}>
													<div className={styles.location}>
														<div
															className={`${styles.ShopName} font_secondary text_700 text_reg`}
														>
															{location.name}
														</div>
														<div
															className={`${styles.address} font_secondary text_400 text_sm`}
														>
															{location.address}
														</div>
													</div>
												</div>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
							{/* Accordian Items using Static content */}
							{/* <AccordionItem>
								<AccordionTitle>Test Accordian title</AccordionTitle>
								<AccordionContent>
									<h1>Test Accordian Content</h1>
									<p>
										Learn how to implement accordions using JavaScript, including event
										handling, DOM manipulation, and integrating with front-end frameworks
										like React or Vue.js.
									</p>
								</AccordionContent>
							</AccordionItem> */}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}

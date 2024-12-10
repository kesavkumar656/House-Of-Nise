// MODULES //
import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
// COMPONENTS //
import Button from "@/components/Buttons/Button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTitle,
} from "../components/Accordian";
// PLUGINS //
import Image from "next/image";
// STYLES //
import styles from "@/styles/sections/HomeFindAStore.module.scss";
// IMAGES //
import shelf from "@/../public/img/HomeFindAStore/shelf.png";
import Vogue from "public/img/HomeFindAStore/vogue.png";
import L_arrow from "@/../public/img/HomeFindAStore/L_Arrow.png";
import R_arrow from "@/../public/img/HomeFindAStore/R_Arrow.png";

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
		<section className={styles.HomeFindAStore}>
			<div className={styles.MarqueeWrapper}>
				<Marquee>
					<div className={styles.MarqueeDiv}>
						<h1 className="col-xs-4 font_primary text_200 text_uppercase">
							Feature In
						</h1>
						<div className={styles.marqueeContainer}>
							<Image src={Vogue} alt="Icon 1" />
						</div>
						<div className={styles.circle}></div>

						<div className={styles.marqueeContainer}>
							<Image src={Vogue} alt="Icon 2" />
						</div>
						<div className={styles.circle}></div>

						<div className={styles.marqueeContainer}>
							<Image src={Vogue} alt="Icon 3" />
						</div>
						<div className={styles.circle}></div>

						<div className={styles.marqueeContainer}>
							<Image src={Vogue} alt="Icon 3" />
						</div>
						<div className={styles.circle}></div>

						<div className={styles.marqueeContainer}>
							<Image src={Vogue} alt="Icon 3" />
						</div>
					</div>
				</Marquee>
			</div>
			<div className="container">
				<h1 className="text_2xl text_400 font_primary">Find a store near you</h1>
				<div className={styles.wrapper}>
					<div className={styles.ImageDiv}>
						<Swiper
							// modules={[Pagination]}
							// pagination={{
							// 	type: "progressbar",
							// }}
							spaceBetween={30}
							slidesPerView={1}
							simulateTouch={true}
							grabCursor={true}
						>
							<SwiperSlide>
								<Image src={shelf} alt="Shelf" />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={shelf} alt="Shelf" />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={shelf} alt="Shelf" />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={shelf} alt="Shelf" />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={shelf} alt="Shelf" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={styles.textDiv}>
						<Accordion>
							{NetherlandsData.map((data, index) => (
								<AccordionItem key={index}>
									<AccordionTitle className="bg_primary">
										<div
											className={`${styles.country} color_white font_secondary text_700 text_sm text_uppercase`}
										>
											{data.country}
										</div>
									</AccordionTitle>
									<AccordionContent>
										<div className={styles.contentWrapper}>
											{data.locations.map((location, locIndex) => (
												<div key={locIndex} className={styles.location}>
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
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
						<div className={styles.btnDiv}>
							<Button color="button" variant="filled" shape="rounded">
								<Image src={L_arrow} alt="Left Arrow" />
							</Button>
							<Button color="button" variant="filled" shape="rounded">
								<Image src={R_arrow} alt="Right Arrow" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

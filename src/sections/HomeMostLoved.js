// MODULES //
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// STYLES //
import styles from "@/styles/sections/HomeMostLoved.module.scss";
import ShoppingCard from "../components/ShoppingCard";

// IMAGES //
import product1 from "public/img/HomeMostLoved/perfume_product.jpg";
import product2 from "public/img/HomeMostLoved/perfume_product2.jpg";

/** HomeMostLoved Section */
export default function HomeMostLoved() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line require-jsdoc
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className={`${styles.HomeMostLoved}`}>
			<div className="container-fluid">
				<h1 className="text_2xl text_400 font_primary">Our most loved</h1>
				<p className={`${styles.para} text_reg text_400 font_primary`}>
					Explore our bestselling fragrances and pick a sensory voyage that suits you
					best.
				</p>
				<div>
					{!isMobile ? (
						<Swiper
							modules={[Pagination]}
							pagination={{
								type: "progressbar",
							}}
							spaceBetween={30}
							slidesPerView={3}
							simulateTouch={true}
							grabCursor={true}
						>
							<SwiperSlide>
								<ShoppingCard
									price="€ 10,00 – € 229,00"
									product="One & Only Extrait de Parfum"
									image={product1}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ShoppingCard
									price="€ 499,00"
									product="Gift Collection Extrait de Parfum"
									image={product2}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ShoppingCard
									price="€ 10,00 – € 229,00"
									product="One & Only Extrait de Parfum"
									image={product1}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ShoppingCard
									price="€ 10,00 – € 229,00"
									product="One & Only Extrait de Parfum"
									image={product1}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<ShoppingCard
									price="€ 10,00 – € 229,00"
									product="One & Only Extrait de Parfum"
									image={product1}
								/>
							</SwiperSlide>
						</Swiper>
					) : (
						<div className={`${styles.mobileDiv}e`}>
							<ShoppingCard
								price="€ 10,00 – € 229,00"
								product="One & Only Extrait de Parfum"
								image={product1}
							/>
							<ShoppingCard
								price="€ 499,00"
								product="Gift Collection Extrait de Parfum"
								image={product2}
							/>
							<ShoppingCard
								price="€ 10,00 – € 229,00"
								product="One & Only Extrait de Parfum"
								image={product1}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

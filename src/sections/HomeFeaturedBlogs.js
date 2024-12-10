// MODULES //
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// COMPONENTS //
import Button from "../components/Buttons/Button";
// STYLES //
import styles from "@/styles/sections/HomeFeaturedBlogs.module.scss";
import BlogCard from "../components/BlogCard";

/** HomeFeaturedBlogs Section */
export default function HomeFeaturedBlogs() {
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
		<section
			className={`${styles.HomeFeaturedBlogs} section_spacing bg_primary_light`}
		>
			<div className="container">
				<h1 className="text_2xl text_500 font_primary">Featured blogs</h1>
				<div className={styles.wrapper}>
					<div className={`${styles.blogWrapper} `}>
						{!isMobile ? (
							// Swiper for larger screens
							<Swiper
								spaceBetween={30}
								slidesPerView={3}
								simulateTouch={true}
								grabCursor={true}
								modules={[Navigation, Pagination]}
							>
								<SwiperSlide>
									<BlogCard
										date={"October 16, 2024"}
										heading={"Oud perfume: the Liquid Gold?"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<BlogCard
										date={"October 16, 2024"}
										heading={"Oud perfume: the Liquid Gold?"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<BlogCard
										date={"October 16, 2024"}
										heading={"Oud perfume: the Liquid Gold?"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<BlogCard
										date={"October 16, 2024"}
										heading={"Oud perfume: the Liquid Gold?"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<BlogCard
										date={"October 16, 2024"}
										heading={"Oud perfume: the Liquid Gold?"}
									/>
								</SwiperSlide>
							</Swiper>
						) : (
							<div className={styles.mobileGrid}>
								<BlogCard
									date={"October 16, 2024"}
									heading={"Oud perfume: the Liquid Gold?"}
								/>
								<BlogCard
									date={"October 16, 2024"}
									heading={"Oud perfume: the Liquid Gold?"}
								/>
								<BlogCard
									date={"October 16, 2024"}
									heading={"Oud perfume: the Liquid Gold?"}
								/>
								<BlogCard
									date={"October 16, 2024"}
									heading={"Oud perfume: the Liquid Gold?"}
								/>
								<BlogCard
									date={"October 16, 2024"}
									heading={"Oud perfume: the Liquid Gold?"}
								/>
							</div>
						)}
					</div>
					<div className={`${styles.button}`}>
						<Button color="primary" variant="filled" shape="squared">
							View all
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

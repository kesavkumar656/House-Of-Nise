// MODULES //
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// STYLES //
import styles from "@/styles/sections/HomeExploreRich.module.scss";

// IMAGES //
import perfume1 from "@/../public/img/HomeExploreRich/perfume1.png";
import perfume2 from "@/../public/img/HomeExploreRich/perfume2.png";
import perfume3 from "@/../public/img/HomeExploreRich/perfume3.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/** HomeExploreRich Section */
export default function HomeExploreRich() {
	const containerRef = useRef(null);

	useEffect(() => {
		// Scoped animations to the container
		const ctx = gsap.context(() => {
			const perfumeDiv1 = "#perfume1";
			const perfumeDiv2 = "#perfume2";
			const perfumeDiv3 = "#perfume3";

			gsap.fromTo(
				perfumeDiv1,
				{ x:500, scale: 2 },
				{
					x: 50,

					opacity: 1,
					y: 0,
					stagger: 0.3,
					duration: 2,
					ease: "power1.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 300px",
						end: "bottom 20%",
						toggleActions: "play none none reverse",
						// pin: true,
						markers: true,
					},
				}
			);
			gsap.fromTo(
				perfumeDiv2,
				{ x: 600, scale: 2 },
				{
					x: -150,
					opacity: 1,
					y: 0,
					stagger: 0.3,
					duration: 2,
					ease: "power1.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 300px",
						end: "bottom 20%",
						toggleActions: "play none none reverse",
						// pin: true,
						markers: true,
					},
				}
			);
			gsap.fromTo(
				perfumeDiv3,
				{ x: 600, scale: 2 },
				{
					x: -340,
					opacity: 1,
					y: 0,
					stagger: 0.3,
					duration: 2,
					ease: "power1.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 300px",
						end: "bottom 20%",
						toggleActions: "play none none reverse",
						// pin: true,
						markers: true,
					},
				}
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className={styles.HomeExploreRich}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.textDiv}>
						<div className={`${styles.heading} text_2xl font_primary text_400`}>
							Explore a rich assortment of stories
						</div>
						<p>
							Dive into a treasure trove of fragrances, inspired by explorative
							journeys – out in the world and within. Through Dutch perfumery at its
							finest, in a curated collection.
						</p>
					</div>
					<div className={styles.imageDiv}>
						<div id="perfume1" className={`${styles.perfumeDiv} bg_primary`}>
							<Image src={perfume1} alt="Perfume 1" />
							<h1>Collection</h1>
						</div>
						<div id="perfume2" className={`${styles.perfumeDiv} bg_secondary_tint`}>
							<Image src={perfume2} alt="Perfume 2" />
							<h1>Thoughtful gifting</h1>
						</div>
						<div id="perfume3" className={`${styles.perfumeDiv} bg_secondary_light`}>
							<Image src={perfume3} alt="Perfume 3" />
							<div>
								<h1>Discover More</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// MODULES //
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// STYLES //
import styles from "@/styles/sections/HomeExploreRich.module.scss";

// IMAGES //
import perfume1 from "@/../public/img/HomeExploreRich/perfume1.jpg";
import perfume2 from "@/../public/img/HomeExploreRich/perfume2.jpg";
import perfume3 from "@/../public/img/HomeExploreRich/perfume3.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/** HomeExploreRich Section */
export default function HomeExploreRich() {
	const containerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const perfume1 = "#perfume1";
			const perfume2 = "#perfume2";
			const perfume3 = "#perfume3";
			const mainDiv = "#MainDiv";
			const imageDiv = "#ImageDiv";

			// Pin and Scroll animation for the main text and wrapper
			// gsap.fromTo(
			// 	mainDiv,
			// 	{ x: 0 },
			// 	{
			// 		x: "-39%",
			// 		opacity: 1,
			// 		duration: 12,

			// 		ease: "power1.out",
			// 		scrollTrigger: {
			// 			trigger: containerRef.current,
			// 			start: "top 50%",
			// 			end: "top 20%",
			// 			toggleActions: "play none none reverse",
			// 			markers: false,
			// 		},
			// 	}
			// );

			// Image container scrolling effect
			gsap.fromTo(
				imageDiv,
				{ x: 200 },
				{
					x: 0,

					opacity: 1,

					y: 0,
					stagger: 0.3,
					duration: 1.5,
					scrollTrigger: {
						trigger: imageDiv,
						start: "top 50%",
						end: "+=200",
						toggleActions: "play none none reverse",
						markers: true,
					},
				}
			);

			// Individual perfume animations
			gsap.fromTo(
				perfume1,
				{ x: 200 },
				{
					x: 0,

					opacity: 1,
					duration: 3,
					ease: "power1.out",
					scrollTrigger: {
						trigger: perfume1,
						start: "top 50%",
						end: "+=200",
						toggleActions: "play none none reverse",
						markers: true,
					},
				}
			);

			gsap.fromTo(
				perfume2,
				{ x: 200 },
				{
					x: 0,

					opacity: 1,
					duration: 3,
					ease: "power1.out",
					scrollTrigger: {
						trigger: perfume2,
						start: "top 50%",
						end: "+=200",
						toggleActions: "play none none reverse",
						markers: true,
					},
				}
			);

			gsap.fromTo(
				perfume3,
				{ x: 200 },
				{
					width: "100%",

					x: 0,
					opacity: 1,
					duration: 3,
					ease: "power1.out",
					scrollTrigger: {
						trigger: perfume3,
						start: "top 50%",
						end: "+=200",
						toggleActions: "play none none reverse",
						markers: true,
					},
				}
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className={styles.HomeExploreRich}>
			<div className={styles.wrapper} id="MainDiv">
				<div className={styles.textDiv}>
					<div className={`${styles.heading} text_2xl font_primary text_400`}>
						Explore a rich assortment of stories
					</div>
					<p>
						Dive into a treasure trove of fragrances, inspired by explorative journeys
						– out in the world and within. Through Dutch perfumery at its finest, in a
						curated collection.
					</p>
				</div>
				<div className={styles.imageDiv} id="ImageDiv">
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
						<h1>Discover More</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

// // MODULES //
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // STYLES //
// import styles from "@/styles/sections/HomeExploreRich.module.scss";

// // IMAGES //
// import perfume1 from "@/../public/img/HomeExploreRich/perfume1.png";
// import perfume2 from "@/../public/img/HomeExploreRich/perfume2.png";
// import perfume3 from "@/../public/img/HomeExploreRich/perfume3.png";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// /** HomeExploreRich Section */
// export default function HomeExploreRich() {
// 	const containerRef = useRef(null);

// 	useEffect(() => {

// 		const ctx = gsap.context(() => {
// 			const perfumeDiv1 = "#perfume1";
// 			const perfumeDiv2 = "#perfume2";
// 			const perfumeDiv3 = "#perfume3";
// 			const Main = "#MainDiv";
// 			const ImageDiv = "#ImageDiv";

// 			gsap.fromTo(
// 				Main,
// 				{ x: 0 },
// 				{
// 					x: " -50%",
// 					opacity: 1,
// 					y: 0,
// 					pin: true,
// 					scrub: true,

// 					duration: 2,
// 					ease: "power1.out",
// 					scrollTrigger: {
// 						trigger: Main,
// 						start: "top top",
// 						end: 400,

// 						pin: true,
// 						scrub: true,
// 						markers: false,
// 					},
// 				}
// 			);
// 			gsap.fromTo(
// 				ImageDiv,
// 				{ x: 0 },
// 				{
// 					opacity: 1,
// 					y: 0,
// 					stagger: 0.3,
// 					duration: 2,

// 					scrollTrigger: {
// 						trigger: containerRef.current,
// 						start: "top 300px",
// 						end: "bottom 20%",
// 						toggleActions: "play none none reverse",
// 						pin: true,
// 						markers: true,
// 					},
// 				}
// 			);
// 			gsap.fromTo(
// 				perfumeDiv1,
// 				{ x: 500 },
// 				{
// 					x: 0,
// 					scale: 1.2,
// 					opacity: 1,
// 					y: 0,
// 					stagger: 0.3,
// 					duration: 4,
// 					ease: "power1.out",
// 					scrollTrigger: {
// 						trigger: containerRef.current,
// 						start: "top 300px",
// 						end: "bottom 20%",
// 						toggleActions: "play none none reverse",
// 						// pin: true,
// 						markers: true,
// 					},
// 				}
// 			);

// 			gsap.fromTo(
// 				perfumeDiv2,
// 				{ x: 300 },
// 				{
// 					x: 0,
// 					scale: 1.5,
// 					opacity: 1,
// 					y: 0,
// 					delay: 1,

// 					stagger: 0.3,
// 					duration: 4,
// 					ease: "power1.out",
// 					scrollTrigger: {
// 						trigger: containerRef.current,
// 						start: "top 300px",
// 						end: "bottom 20%",
// 						toggleActions: "play none none reverse",
// 						// pin: true,
// 						markers: true,
// 					},
// 				}
// 			);
// 			gsap.fromTo(
// 				perfumeDiv3,
// 				{ x: 400 },
// 				{
// 					scale: 1.5,
// 					x: 0,
// 					opacity: 1,
// 					y: 0,
// 					delay: 1,
// 					stagger: 0.3,
// 					duration: 4,
// 					ease: "power1.out",
// 					scrollTrigger: {
// 						trigger: containerRef.current,
// 						start: "top 300px",
// 						end: "bottom 20%",
// 						toggleActions: "play none none reverse",
// 						// pin: true,
// 						markers: true,
// 					},
// 				}
// 			);
// 		}, containerRef);

// 		return () => ctx.revert();
// 	}, []);

// 	return (
// 		<section ref={containerRef} className={styles.HomeExploreRich}>
// 			<div className="">
// 				<div className={styles.wrapper} id="MainDiv">
// 					<div className={styles.textDiv}>
// 						<div className={`${styles.heading} text_2xl font_primary text_400`}>
// 							Explore a rich assortment of stories
// 						</div>
// 						<p>
// 							Dive into a treasure trove of fragrances, inspired by explorative
// 							journeys – out in the world and within. Through Dutch perfumery at its
// 							finest, in a curated collection.
// 						</p>
// 					</div>
// 					<div className={styles.imageDiv} id="ImageDiv">
// 						<div id="perfume1" className={`${styles.perfumeDiv} bg_primary`}>
// 							<Image src={perfume1} alt="Perfume 1" />
// 							<h1>Collection</h1>
// 						</div>
// 						<div id="perfume2" className={`${styles.perfumeDiv} bg_secondary_tint`}>
// 							<Image src={perfume2} alt="Perfume 2" />
// 							<h1>Thoughtful gifting</h1>
// 						</div>
// 						<div id="perfume3" className={`${styles.perfumeDiv} bg_secondary_light`}>
// 							<Image src={perfume3} alt="Perfume 3" />
// 							<div>
// 								<h1>Discover More</h1>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

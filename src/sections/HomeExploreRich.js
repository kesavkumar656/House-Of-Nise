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
			const mainDiv = "#MainDiv";
			const imageDiv = "#ImageDiv";
			const perfumes = gsap.utils.toArray(".perfumeDiv");

			// Move the entire section to the left
			gsap.to(mainDiv, {
				x: "-50vw", // Move it left by 50vw
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
					pin: true,
				},
			});

			// Animate each image div: increase width and move left
			perfumes.forEach((perfume, index) => {
				gsap.fromTo(
					perfume,
					{ width: "20%", x: 0 },
					{
						width: "40%", // Double the width
						x: -100 * index, // Move left proportionally for each image
						ease: "power1.out",
						scrollTrigger: {
							trigger: containerRef.current,
							start: "top top",
							end: "bottom top",
							scrub: true,
						},
					}
				);
			});
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
						<Image className="next_cover_image" src={perfume1} alt="Perfume 1" />
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

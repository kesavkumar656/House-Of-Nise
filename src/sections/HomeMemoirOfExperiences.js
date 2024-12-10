// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

import Marquee from "react-fast-marquee";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeMemoirOfExperiences.module.scss";
import Button from "../components/Buttons/Button";

// IMAGES //
import building from "@/../public/img/HomeMemoirOfExperiences/Buildings.png";
import icon1 from "@/../public/img/HomeMemoirOfExperiences/icon2.png";
import icon2 from "@/../public/img/HomeMemoirOfExperiences/icon3.png";
import icon3 from "@/../public/img/HomeMemoirOfExperiences/icon4.png";

// DATA //

/** HomeMemoirOfExperiences Section */
export default function HomeMemoirOfExperiences() {
	return (
		<section className={styles.HomeMemoirOfExperiences}>
			<div className="section_spacing">
				<div className="">
					<div className={styles.wrapper}>
						<div className={`${styles.textDiv}  `}>
							<h1 className=" font_primary text_3xl  color_primary">
								A memoir of experiences, waiting to
								<span className="color_black"> unfold</span>
							</h1>
							<p className=" font_secondary text_reg ">
								Each note is a distinct memory, lingering like footsteps across distant
								lands. House of Nisé is more than just fragrance, it’s an odyssey. Every
								scent takes you to a new experience of the world, enveloping you in
								boundless discovery.
							</p>
							<div className={`${styles.Button}`}>
								<Button color="primary" shape="squared" variant="filled">
									World Of Nise
								</Button>
							</div>
						</div>

						<Image src={building} alt=""></Image>
					</div>
					<div className={styles.MarqueeWrapper}>
						<Marquee>
							<div className={styles.MarqueeDiv}>
								<div className={styles.marqueeContainer}>
									<Image src={icon1}></Image>
									<p className="col-xs-6">Long-lasting fragrance</p>
								</div>
								<div className={styles.marqueeContainer}>
									<Image src={icon2}></Image>
									<p className="col-xs-6">Gender-neutral scents</p>
								</div>
								<div className={styles.marqueeContainer}>
									<Image src={icon3}></Image>
									<p className="col-xs-8">High concentration of perfume oils</p>
								</div>
								<div className={styles.marqueeContainer}>
									<Image src={icon3}></Image>
									<p className="col-xs-8">High concentration of perfume oils</p>
								</div>
								<div className={styles.marqueeContainer}>
									<Image src={icon3}></Image>
									<p className="col-xs-6">Custom luxury boxes</p>
								</div>
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</section>
	);
}

// MODULES //

// COMPONENTS //
import Button from "../components/Buttons/Button";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeFeaturedBlogs.module.scss";
import BlogCard from "../components/BlogCard";

// IMAGES //

// DATA //

/** HomeFeaturedBlogs Section */
export default function HomeFeaturedBlogs() {
	return (
		<section
			className={`${styles.HomeFeaturedBlogs} section_spacing bg_primary_light`}
		>
			<div className="container">
				<h1 className="text_2xl text_500 font_primary">Featured blogs</h1>
				<div className={styles.wrapper}>
					<div className={styles.blogWrapper}>
						<BlogCard
							date={"October 16, 2024"}
							heading={"Oud perfume: the Liquid Gold?"}
						></BlogCard>
						<BlogCard
							date={"October 16, 2024"}
							heading={"Oud perfume: the Liquid Gold?"}
						></BlogCard>
						<BlogCard
							date={"October 16, 2024"}
							heading={"Oud perfume: the Liquid Gold?"}
						></BlogCard>
					</div>
					<div className="color_white">
						<Button color="primary" variant="filled">
							View all
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

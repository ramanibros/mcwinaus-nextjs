import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import FooterMod from "@/components/layout/footer/FooterMod";
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Brands from "@/components/sections/home/Brands";
import Features from "@/components/sections/home/Features";
import Process from "@/components/sections/home/Process";
import Brands2 from "@/components/sections/home/Brands2";
import Funfact from "@/components/sections/home/Funfact";
import Testimonials from "@/components/sections/home/Testimonials";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Faq from "@/components/sections/home/Faq";
import About2 from "@/components/sections/home/About2";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero />
						<About />
						<Brands />
						<Features />
						<Process />
						<Brands2 />
						<Funfact />
						<Testimonials />
						<About2 />
						<Blogs2 />
						<Faq />
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

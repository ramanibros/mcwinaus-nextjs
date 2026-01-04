import Header from "@/components/layout/header/Header";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Process2 from "@/components/sections/process/Process2";
import About9 from "@/components/sections/about/About9";
import Features5 from "@/components/sections/features/Features5";
import Hero2 from "@/components/sections/hero/Hero2";
import FooterMod from "@/components/layout/footer/FooterMod";
import Choose from "@/components/sections/choose/Choose";
import Brands3 from "@/components/sections/brands/Brands3";
import Brands2 from "@/components/sections/brands/Brands2";
import Brands4 from "@/components/sections/brands/Brands4";
import Services7 from "@/components/sections/services/Services7";
import Testimonials7 from "@/components/sections/testimonials/Testimonials7";
import About6 from "@/components/sections/about/About6";
import Faq4 from "@/components/sections/faq/Faq4";

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
						<Hero2 />
						<About9 />
						<Brands3 />
						<Features5 />
						<Process2 />
						<Brands1 />
						<Funfact1 />
						<Testimonials1 />
						<About6 />
						<Blogs1 />
						<Faq4 />
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

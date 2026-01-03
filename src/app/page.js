import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/about/About1";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Features from "@/components/sections/features/Features";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/hero/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Hero10 from "@/components/sections/hero/Hero10";
import Hero3 from "@/components/sections/hero/Hero3";
import Hero5 from "@/components/sections/hero/Hero5";
import Process4 from "@/components/sections/process/Process4";
import Process2 from "@/components/sections/process/Process2";
import Services10 from "@/components/sections/services/Services10";
import Features4 from "@/components/sections/features/Features4";
import About9 from "@/components/sections/about/About9";
import Features5 from "@/components/sections/features/Features5";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer3 from "@/components/layout/footer/Footer3";
import Hero2 from "@/components/sections/hero/Hero2";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer5 from "@/components/layout/footer/Footer5";
import Footer6 from "@/components/layout/footer/Footer6";
import Footer10 from "@/components/layout/footer/Footer10";
import Footer7 from "@/components/layout/footer/Footer7";
import Footer8 from "@/components/layout/footer/Footer8";
import Footer9 from "@/components/layout/footer/Footer9";
import FooterMod from "@/components/layout/footer/FooterMod";

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
						<Features5 />
						<Process2 />
						<Brands1 />
						<Funfact1 />
						<Testimonials1 />
						<Blogs1 />
						{/*<Contact2 />*/}
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

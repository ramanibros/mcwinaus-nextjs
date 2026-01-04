import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";

const About2 = () => {
	return (
		<section className="tj-about-section h7-about section-gap section-gap-x mt-10">
			<div className="container-fluid gap-15">
				<div className="row">
					<div className="col-12 col-xl-6">
						<div className="h7-about-banner  wow fadeInUp" data-wow-delay=".2s">
							<img
								data-speed=".8"
								src="/images/about/h7-about-banner.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="col-12 col-xl-6">
						<div className="row h7-about-counter-wrapper">
							<div className="col-12 col-md-6">
								<div
									className="countup-item style-2 wow fadeInUp"
									data-wow-delay=".3s"
								>
									<p className="counter-title">Faster Growth</p>
									<h5 className="steps">01.</h5>
									<div className="count-inner">
										<FunfactSingle currentValue={8.5} symbol={"X"} />
										<span className="count-text">Built for Super Speed</span>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 ">
								<div
									style={{
										backgroundImage: "url('/images/about/h7-about-item.webp')",
									}}
									className="img-box style-2  wow fadeInUp"
									data-wow-delay=".4s"
								></div>
							</div>
							<div className="col-12 col-md-6 ">
								<div
									className="customers-box style-2  wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div
										className="customers-bg"
										style={{
											backgroundImage:
												"url('/images/about/h7-about-item-bg.webp')",
										}}
									></div>

									<h6
										className="customers-text wow fadeInLeft"
										data-wow-delay=".6s"
									>
										Enabling startups to raise $25M+ in venture funding.
									</h6>
									<Link
										className="text-btn wow fadeInLeft"
										data-wow-delay=".5s"
										href="/contact"
									>
										<span className="btn-text">
											<span>Contact us</span>
										</span>
										<span className="btn-icon">
											<i className="tji-arrow-right-long"></i>
										</span>
									</Link>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div
									className="countup-item style-2  wow fadeInUp"
									data-wow-delay=".6s"
								>
									<p className="counter-title">Reach Worldwide</p>
									<h5 className="steps">02.</h5>
									<div className="count-inner">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="count-text">
											Corporate Service Holders
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About2;

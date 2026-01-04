import FeatureCard4 from "@/components/shared/cards/FeatureCard4";

const Features = ({ type }) => {
	const features = [
		{
			title: "BRAND",
			desc: "Web Design, Branding & App Design that elevates your business.",
			icon: "tji-innovative",
		},
		{
			title: "BUILD",
			desc: "SEO, SMM, SEM & Automation that drive real growth.",
			icon: "tji-award",
		},
		{
			title: "GROW",
			desc: "Scalable Web, App & eCommerce Development services.",
			icon: "tji-support",
		},{
			title: "SCALE",
			desc: "PickFlow, your trusted Fleet Management Specialists.",
			icon: "tji-innovative",
		},
	];

	return (
		<section
			id="choose"
			className="tj-choose-section h6-choose h7-choose section-gap"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title text-anim">
								Empowering Business with Expertise.
							</h2>
						</div>
					</div>
				</div>
				<div
					className="row h7-choose-item-wrapper  wow fadeInLeftBig"
					data-wow-delay=".4s"
				>
					{features.map((feature, idx) => (
						<FeatureCard4 key={idx} feature={feature} idx={idx} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;

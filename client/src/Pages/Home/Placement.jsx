import { ArrowUpRight, BriefcaseBusiness, FileText, MessageCircle } from "lucide-react";
import placementImage from "../../assets/optimized/placemeent.jpg";

const Placement = () => {
	const supportAreas = [
		{
			icon: BriefcaseBusiness,
			title: "Career direction",
			description: "Explore opportunities that fit your skills and interests.",
		},
		{
			icon: FileText,
			title: "Resume preparation",
			description: "Present your skills and learning clearly to employers.",
		},
		{
			icon: MessageCircle,
			title: "Interview practice",
			description: "Build confidence communicating what you know.",
		},
	];

	return (
		<section className="bg-slate-50 px-5 py-16 text-slate-900 sm:px-8 lg:py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div className="relative">
					<img
						src={placementImage}
						alt="Students preparing for career opportunities"
						width="1000"
						height="558"
						loading="lazy"
						decoding="async"
						className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
					/>
					{/* <div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-3 shadow-lg sm:bottom-6 sm:left-6">
						<p className="text-sm font-bold text-slate-900">Skills for the next step</p>
						<p className="mt-1 text-xs text-slate-600">Learn, prepare, and move forward</p>
					</div> */}
				</div>

				<div>
					<p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
						Career support
					</p>
					<h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
						Turn your learning into a confident next step.
					</h2>
					<p className="mt-5 max-w-xl leading-7 text-slate-600">
						Build practical skills and get guidance as you prepare for the
						opportunities ahead. Our team can help you understand the next steps
						after your course.
					</p>

					<div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
						{supportAreas.map(({ icon: Icon, title, description }) => (
							<div key={title} className="flex gap-4 py-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
									<Icon size={21} aria-hidden="true" />
								</span>
								<div>
									<h3 className="font-bold">{title}</h3>
									<p className="mt-1 text-sm leading-6 text-slate-600">
										{description}
									</p>
								</div>
							</div>
						))}
					</div>

					<a
						href="/contact"
						className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
					>
						Talk to our team
						<ArrowUpRight size={18} aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Placement;

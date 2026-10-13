import {
	ArrowUpRight,
	BriefcaseBusiness,
	Laptop,
	Target,
	Users,
} from "lucide-react";

const reasons = [
	{
		icon: Laptop,
		title: "Learn by doing",
		description:
			"Build understanding through hands-on computer practice and project work.",
	},
	{
		icon: Users,
		title: "Get personal support",
		description:
			"Ask questions, work through challenges, and get guidance as you learn.",
	},
	{
		icon: Target,
		title: "Focus on useful skills",
		description:
			"Develop practical skills that support your learning and career goals.",
	},
	{
		icon: BriefcaseBusiness,
		title: "Prepare for what is next",
		description:
			"Get career guidance as you take your next steps after completing a course.",
	},
];

const WhyUs = () => (
	<section className="bg-white px-5 py-16 text-slate-900 sm:px-8 lg:py-24">
		<div className="mx-auto max-w-7xl">
			<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
				<div>
					<p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
						Why IISL
					</p>
					<h2 className="mt-3 max-w-lg text-3xl font-black leading-tight sm:text-4xl">
						Learning built around your growth.
					</h2>
				</div>
				<p className="max-w-2xl leading-7 text-slate-600">
					Learn in a practical, supportive environment where you can build
					confidence, strengthen useful skills, and move toward your goals one
					step at a time.
				</p>
			</div>

			<div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
				{reasons.map(({ icon: Icon, title, description }) => (
					<article key={title} className="bg-white p-6 sm:p-8">
						<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
							<Icon size={21} aria-hidden="true" />
						</div>
						<h3 className="mt-5 text-lg font-bold">{title}</h3>
						<p className="mt-2 leading-6 text-slate-600">{description}</p>
					</article>
				))}
			</div>

			<a
				href="/why-us"
				className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
			>
				More about us
				<ArrowUpRight size={18} aria-hidden="true" />
			</a>
		</div>
	</section>
);

export default WhyUs;
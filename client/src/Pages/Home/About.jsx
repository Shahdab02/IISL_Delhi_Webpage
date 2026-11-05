import { ArrowUpRight, BookOpen, MapPin } from "lucide-react";
import instituteLogo from "../../assets/optimized/logoold.jpg";

const learningAreas = [
	"Computer education",
	"Digital skills and web development",
	"English and foreign languages",
];

const About = () => (
	<section className="bg-slate-50 px-5 py-14 text-slate-900 sm:px-8 lg:py-20">
		<div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
			<div className="about-logo-panel flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-3 shadow-sm sm:p-5">
				<img
					src={instituteLogo}
					alt="Indian Institute of Skills & Languages logo"
					width="1000"
					height="666"
					loading="lazy"
					decoding="async"
					className="h-auto w-full max-w-none object-contain"
				/>
			</div>

			<div>
				<p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
					About IISL
				</p>
				<h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
					Practical learning for skills that move you forward.
				</h2>
				<p className="mt-5 max-w-2xl leading-7 text-slate-600">
					Indian Institute of Skills &amp; Languages is a learning institute in
					Rohini, Delhi, focused on practical computer education, digital skills,
					web development, and language learning. We help learners build
					knowledge and confidence through structured training and practice.
				</p>

				<ul className="mt-7 grid gap-3 sm:grid-cols-2">
					{learningAreas.map((area) => (
						<li key={area} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
							<BookOpen
								size={18}
								className="mt-0.5 shrink-0 text-emerald-700"
								aria-hidden="true"
							/>
							{area}
						</li>
					))}
				</ul>

				<p className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-600">
					<MapPin size={18} className="shrink-0 text-emerald-700" aria-hidden="true" />
					647 Gram Sabha, Rohini Sector 23, Delhi
				</p>

				<a
					href="/about"
					className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
				>
					Discover IISL
					<ArrowUpRight size={18} aria-hidden="true" />
				</a>
			</div>
		</div>
	</section>
);

export default About;
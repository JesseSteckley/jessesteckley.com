import { o as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, i as Check, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { c as SITE, o as FAQ, s as LINKS } from "./router-DpKlrIRJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bk5EkpUc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		href: "#approach",
		label: "Approach"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#impact",
		label: "Impact"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SkipLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#main",
		className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink",
		children: "Skip to content"
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/92",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "text-sm font-semibold tracking-tight text-fg sm:text-base",
					children: "Jesse Steckley"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 text-sm text-muted md:flex",
					"aria-label": "Primary",
					children: [NAV.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "hover:text-fg transition-colors duration-150",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-flex min-h-10 items-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-fg hover:bg-accent-strong transition-colors duration-150",
						children: "Contact"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center text-fg md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-border bg-surface md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-5 py-3",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "min-h-12 py-3 text-fg",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href))
			})
		}) : null]
	});
}
function Portrait() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			media: "(min-width: 768px)",
			type: "image/webp",
			srcSet: "/images/jesse-portrait-480.webp 480w, /images/jesse-portrait-720.webp 720w, /images/jesse-portrait-960.webp 960w, /images/jesse-portrait-1200.webp 1200w",
			sizes: "(min-width: 1024px) 32rem, 28rem"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			media: "(min-width: 768px)",
			type: "image/jpeg",
			srcSet: "/images/jesse-portrait-480.jpg 480w, /images/jesse-portrait-720.jpg 720w, /images/jesse-portrait-960.jpg 960w, /images/jesse-portrait-1200.jpg 1200w",
			sizes: "(min-width: 1024px) 32rem, 28rem"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			type: "image/webp",
			srcSet: "/images/jesse-wide-480.webp 480w, /images/jesse-wide-768.webp 768w, /images/jesse-wide-1100.webp 1100w",
			sizes: "100vw"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/jesse-wide-768.jpg",
			alt: "Jesse Steckley, Economic Reconciliation Advisor from Wasauksing First Nation",
			width: 768,
			height: 432,
			fetchPriority: "high",
			decoding: "async",
			className: "hero-photo h-auto w-full shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] md:max-w-md lg:max-w-lg"
		})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.22]",
			style: {
				backgroundImage: "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-fg) 7%, transparent) 1px, transparent 0)",
				backgroundSize: "28px 28px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 px-5 pb-12 pt-20 sm:px-6 md:min-h-[calc(100svh-4rem)] md:grid-cols-2 md:gap-x-16 md:pb-16 md:pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-accent md:mb-6 md:text-left md:text-xs md:tracking-[0.16em]",
					children: "Wasauksing First Nation · Robinson Huron Treaty 1850"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-center font-display text-3xl text-fg md:col-start-1 md:text-left",
					children: "Jesse Steckley"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-lg font-medium text-fg md:mt-4 md:text-left md:text-xl",
					children: "Economic Reconciliation Advisor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 hidden text-sm text-subtle md:block",
					children: "Aubdauban — New Dawn / Forever Light"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-mx-5 mt-6 md:col-start-2 md:row-span-6 md:row-start-1 md:mx-0 md:mt-0 md:flex md:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-base leading-relaxed text-muted md:mt-5 md:max-w-md md:text-left md:text-lg",
					children: "Building better futures for all Canadians through practical capacity, stronger systems, and lasting partnerships."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg hover:bg-accent-strong transition-[background-color] duration-150 md:min-h-11",
						children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#approach",
						className: "inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-fg hover:bg-elevated transition-[background-color] duration-150 md:min-h-11",
						children: "How I work"
					})]
				})
			]
		})]
	});
}
var STATS = [
	{
		value: "530",
		label: "Awards annually"
	},
	{
		value: "$1.6M",
		label: "Student support"
	},
	{
		value: "Future 40",
		label: "CBC Manitoba, 2025"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Selected results",
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0",
			children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-8 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: stat.label
				})]
			}, stat.label))
		})
	});
}
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "approach",
		className: "below-fold border-t border-border bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "01 — Approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-xl font-display text-2xl text-fg",
					children: "Wealth medicine in practice."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Real progress happens when people, land, and systems are aligned for community wellbeing and intergenerational prosperity."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper p-8 text-ink md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: "People & Capacity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-ink-muted",
								children: "Strong communities start with strong people. I focus on workforce development, education pathways, leadership capacity, and the relationships that make economic reconciliation real — not theoretical."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-2.5 text-sm text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Indigenous workforce development and education" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Capacity building with Nations and organizations" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Healthy systems that support people and families" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-elevated p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-fg",
								children: "Land, Systems & Future Generations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-muted",
								children: "Practical tools and clean systems only create lasting value when they strengthen Nations and honour relationships with land. I work where Indigenous economic development meets useful technology and sustainable infrastructure — always with community wellbeing and future generations at the centre."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-2.5 text-sm text-fg/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Technology guided by Indigenous priorities and ways of knowing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Clean energy and infrastructure that advance Nation-building" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Systems designed as wealth medicine for intergenerational prosperity" })
								]
							})
						]
					})]
				})
			]
		})
	});
}
var WORK = [
	{
		n: "01",
		title: "Workforce & education",
		body: "Pathways that move people from training into real work — scholarships, employment, and the systems that hold both."
	},
	{
		n: "02",
		title: "Procurement & participation",
		body: "Practical approaches that increase Indigenous business opportunity and turn procurement policy into contracts."
	},
	{
		n: "03",
		title: "Nation-building strategy",
		body: "Capacity, partnerships, and economic design that strengthen Nations over the long term — not one-off projects."
	}
];
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "below-fold border-t border-border bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "02 — Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-xl font-display text-2xl text-fg",
					children: "How I help"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Advisory for Nations, governments, and partners who want economic reconciliation to show up in results."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-3",
					children: WORK.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-elevated p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.14em] text-accent",
								children: item.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl text-fg",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: item.body
							})
						]
					}, item.n))
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "below-fold border-t border-border bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
				children: "03 — About"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "sticky top-24 font-display text-2xl text-fg",
						children: [
							"The work",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"behind the work"
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-lg leading-relaxed text-muted lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Jesse Steckley (Aubdauban — New Dawn / Forever Light) is a member of Wasauksing First Nation through the Robinson Huron Treaty of 1850. Raised in Barrie, Ontario, he is the son of Jeff Steckley of Midhurst and Tracey Pawis (Boshdayosgaykwe) of Wasauksing, founder of G’zaagin Art Gallery. His family roots include the Tabobondung and Pawis families of Wasauksing—among them his grandmother Audrey Gladys Pawis (PamajewonKwe), a long-time Community Health Representative who helped shape health and social programs in Wasauksing for more than twenty-five years; her husband Lorne Frederick Pawis, who served in the military; and Audrey’s father, Alfred Edward Waubgeshig Tabobondung, a former chief. On his father’s side, he comes from the Steckley family of Barrie, including his grandparents Keith Steckley and Annshiela Francis Young. His brother,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.mangeshig,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-accent underline-offset-4 hover:underline",
								children: "Josh Pawis-Steckley (Mangeshig)"
							}),
							", is a nationally recognized Indigenous children’s book illustrator."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "After beginning in the trades, Jesse completed the Aboriginal Community and Social Development diploma at Georgian College and continued at Trent University, studying Indigenous Studies with a minor in Business Administration. That foundation—practical work experience combined with Indigenous and business education—shapes his approach to economic reconciliation today." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Jesse is best known for growing Manitoba’s largest",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.iea,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-accent underline-offset-4 hover:underline",
								children: "Indigenous student awards program"
							}),
							" ",
							"from 100 awards valued at $300,000 to 530 awards and $1.6 million in support. He has also contributed to Indigenous procurement initiatives with the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.ccib,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-accent underline-offset-4 hover:underline",
								children: "Canadian Council for Indigenous Business"
							}),
							" ",
							"and works with Nations and partners on workforce development, capacity building, and economic strategy. In 2025, he was named to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKS.cbc,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-accent underline-offset-4 hover:underline",
								children: "CBC Manitoba’s Future 40"
							}),
							" ",
							"for leadership in economic reconciliation."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As founder of Waaseyak, Jesse helps First Nations and organizations build practical systems for prosperity—stronger workforces, better economic participation, and long-term Nation-building. He is the husband of Nicola Little, Artist & Cultural Connector from Garden Hill First Nation (Treaty 5), who has more than 15 years in the arts and cultural sector, and the father of Charlie Little and Zaagaasgeh Lucy Little. He lives in Winnipeg on Treaty 1 Territory." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-subtle",
							children: "This site is a simple point of contact. If you’re working on Indigenous workforce development, economic reconciliation, or related opportunities — I’d welcome the conversation."
						})
					]
				})]
			})]
		})
	});
}
var IMPACT = [
	{
		title: "Future 40",
		sub: "CBC Manitoba · 2025",
		href: LINKS.cbc,
		body: "Recognized among Manitoba’s top young leaders for contributions to economic reconciliation through education and employment programming."
	},
	{
		title: "Workforce",
		sub: "BCM · Indigenous Education Awards",
		href: LINKS.iea,
		body: "Grew the largest Indigenous student awards program in the province from 100 awards ($300,000) to 530 awards ($1.6M), expanding access and outcomes for students across Manitoba."
	},
	{
		title: "Procurement",
		sub: "CCIB · Supply Change",
		href: LINKS.ccib,
		body: "Contributed to early work on Indigenous procurement approaches aimed at increasing meaningful economic participation and business opportunity."
	}
];
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "impact",
		className: "below-fold border-t border-border bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "04 — Impact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Selected impact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "A few markers of the work — focused on results that matter for people and communities."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-3",
					children: IMPACT.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: card.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group rounded-xl border border-border bg-elevated p-6 transition-colors duration-150 hover:border-accent/35",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-[0.14em] text-accent",
									children: card.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-subtle group-hover:text-accent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-subtle",
								children: card.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted group-hover:text-fg/85",
								children: card.body
							})
						]
					}, card.title))
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "below-fold border-t border-border bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "05 — FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Common questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-fg",
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle transition-transform duration-150 group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
							children: item.a
						})]
					}, item.q))
				})
			]
		})
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(SITE.email);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			window.location.href = `mailto:${SITE.email}`;
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "below-fold border-t border-border bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "06 — Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Let’s talk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg leading-relaxed text-muted",
					children: "Whether you’re a Nation, organization, or partner looking to advance Indigenous workforce development, economic reconciliation, or related work — reach out."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.14em] text-subtle",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SITE.email}`,
							className: "mt-2 inline-block text-xl font-semibold text-accent hover:text-accent-strong sm:text-2xl",
							children: SITE.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyEmail,
								className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-fg hover:bg-elevated transition-colors duration-150",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : null, copied ? "Copied" : "Copy email"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-subtle",
					children: [
						"Prefer social? Connect on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-muted hover:text-accent",
							children: "LinkedIn"
						}),
						" ",
						"or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.twitter,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-muted hover:text-accent",
							children: "X"
						}),
						"."
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-bg py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-subtle sm:flex-row sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Jesse Steckley · Waaseyak"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Winnipeg · Treaty 1 Territory" })]
		})
	});
}
function JsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": `${SITE.url}/#person`,
				name: SITE.name,
				givenName: "Jesse",
				familyName: "Steckley",
				additionalName: SITE.indigenousName,
				alternateName: ["Aubdauban", "Jesse Steckley Aubdauban"],
				jobTitle: SITE.shortTitle,
				description: SITE.description,
				url: SITE.url,
				email: SITE.email,
				image: SITE.portrait,
				nationality: "Canadian",
				knowsLanguage: ["en-CA"],
				homeLocation: {
					"@type": "Place",
					name: "Winnipeg, Treaty 1 Territory",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Winnipeg",
						addressRegion: "MB",
						addressCountry: "CA"
					}
				},
				affiliation: {
					"@type": "Organization",
					name: "Wasauksing First Nation"
				},
				alumniOf: [{
					"@type": "CollegeOrUniversity",
					name: "Georgian College"
				}, {
					"@type": "CollegeOrUniversity",
					name: "Trent University"
				}],
				award: "CBC Manitoba Future 40 (2025)",
				sameAs: [
					SITE.twitter,
					SITE.linkedin,
					LINKS.cbc
				],
				worksFor: { "@id": `${SITE.url}/#org` },
				founder: { "@id": `${SITE.url}/#org` },
				hasOccupation: {
					"@type": "Occupation",
					name: SITE.shortTitle,
					occupationLocation: {
						"@type": "AdministrativeArea",
						name: "Canada"
					}
				},
				knowsAbout: [
					"Indigenous economic development",
					"Workforce development",
					"Indigenous procurement",
					"Economic reconciliation",
					"Indigenomics",
					"Nation-building"
				]
			},
			{
				"@type": "ProfessionalService",
				"@id": `${SITE.url}/#org`,
				name: "Waaseyak",
				alternateName: "Waaseyak Corp",
				founder: { "@id": `${SITE.url}/#person` },
				url: SITE.url,
				email: SITE.email,
				image: SITE.image,
				areaServed: [{
					"@type": "Country",
					name: "Canada"
				}, {
					"@type": "AdministrativeArea",
					name: "Manitoba"
				}],
				serviceType: [
					"Indigenous workforce development",
					"Indigenous procurement advisory",
					"Economic reconciliation strategy"
				],
				description: "Consulting for First Nations and partners on workforce development, economic participation, and Nation-building.",
				makesOffer: [
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Workforce and education pathways"
						}
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Indigenous procurement advisory"
						}
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Nation-building strategy"
						}
					}
				]
			},
			{
				"@type": "WebSite",
				"@id": `${SITE.url}/#website`,
				url: SITE.url,
				name: SITE.name,
				description: SITE.description,
				inLanguage: "en-CA",
				publisher: { "@id": `${SITE.url}/#person` },
				dateModified: SITE.lastUpdated
			},
			{
				"@type": "WebPage",
				"@id": `${SITE.url}/#webpage`,
				url: SITE.url,
				name: SITE.title,
				isPartOf: { "@id": `${SITE.url}/#website` },
				about: { "@id": `${SITE.url}/#person` },
				inLanguage: "en-CA",
				dateModified: SITE.lastUpdated,
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: SITE.portrait
				},
				speakable: {
					"@type": "SpeakableSpecification",
					cssSelector: [
						"h1",
						"h2",
						"#about"
					]
				}
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: SITE.url
				}]
			},
			{
				"@type": "FAQPage",
				"@id": `${SITE.url}/#faq`,
				mainEntity: FAQ.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.a
					}
				}))
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipLink, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };

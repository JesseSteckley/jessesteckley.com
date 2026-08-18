import { useEffect, useMemo, useRef, useState } from "react";
import { FAQ, LINKS, SITE } from "@/lib/site";

const NAV = [
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function ScrollLights() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const collect = () => Array.from(document.querySelectorAll<HTMLElement>("[data-fuse]"));

    const update = () => {
      const vh = window.innerHeight || 1;
      for (const el of collect()) {
        const r = el.getBoundingClientRect();
        const span = vh + Math.max(r.height, 1);
        const raw = (vh - r.top) / span;
        const progress = Math.max(0, Math.min(1, raw));
        el.style.setProperty("--fuse", progress.toFixed(4));
        const visible = r.bottom > vh * 0.08 && r.top < vh * 0.92;
        el.classList.toggle("is-lit", visible);
      }
    };

    if (reduce) {
      collect().forEach((el) => {
        el.style.setProperty("--fuse", "0.18");
        el.classList.add("is-lit");
      });
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}


function spark(kind: "dawn" | "forever") {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const root = document.documentElement;
  root.classList.remove("egg-dawn", "egg-forever");
  void root.offsetWidth;
  root.classList.add(kind === "dawn" ? "egg-dawn" : "egg-forever");
  window.setTimeout(() => {
    root.classList.remove("egg-dawn", "egg-forever");
  }, 1600);
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
  );
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden>
      <svg viewBox="0 0 56 42" fill="none">
        <path className="logo-horizon" d="M6 30h44" />
        <circle className="logo-sun" cx="28" cy="22" r="8.5" />
        <path className="logo-ray logo-ray-a" d="M28 8v4" />
        <path className="logo-ray logo-ray-b" d="M16.5 14.5 19.3 17" />
        <path className="logo-ray logo-ray-c" d="M39.5 14.5 36.7 17" />
      </svg>
    </span>
  );
}

export function Nav() {
  useEffect(() => {
    const root = document.getElementById("mobile-nav");
    if (!root) return;
    const onClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a")) {
        (root as HTMLDetailsElement).open = false;
      }
    };
    root.addEventListener("click", onClick, { passive: true });
    return () => root.removeEventListener("click", onClick);
  }, []);
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          href="#top"
          className="site-logo"
          aria-label="Jesse Steckley — home. The sun holds a dawn."
          onClick={() => spark("dawn")}
        >
          <LogoMark />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <details id="mobile-nav" className="group md:hidden">
          <summary className="nav-toggle">
            <span className="sr-only">Menu</span>
            <span className="group-open:hidden">
              <IconMenu />
            </span>
            <span className="hidden group-open:block">
              <IconClose />
            </span>
          </summary>
          <div className="mobile-panel">
            <nav aria-label="Mobile">
              {NAV.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}


function formatCount(value: number, kind: "number" | "money", decimals: number) {
  if (kind === "money") {
    if (value < 1_000_000) return `$${Math.round(value / 1000)}K`;
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  return Math.round(value).toLocaleString("en-CA");
}

function CountUp({
  from = 0,
  to,
  kind = "number",
  decimals = 0,
}: {
  from?: number;
  to: number;
  kind?: "number" | "money";
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          setValue(from + (to - from) * eased);
          if (t < 1) frame = window.requestAnimationFrame(tick);
        };
        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [from, to]);

  return <span ref={ref}>{formatCount(value, kind, decimals)}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center px-5 pb-16 sm:px-6 md:grid-cols-2 md:gap-10 md:pb-20 lg:gap-14">
        <div className="relative order-1 mb-6 flex w-full justify-center md:order-2 md:mb-0 md:justify-end">
          <div className="hero-live-wrap">
            <video
              className="hero-live"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/jesse-portrait-720.webp"
            >
              <source src="/jesse-live.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="order-2 w-full max-w-xl md:order-1">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Wasauksing First Nation · Robinson Huron Treaty 1850
          </p>
          <h1 className="font-display text-3xl text-fg">{SITE.name}</h1>
          <p className="mt-4 text-xl font-medium text-fg/90 md:text-2xl">{SITE.shortTitle}</p>
          <button type="button" className="egg-name mt-2 text-sm text-subtle" onClick={() => spark("forever")}>
            Aubdauban — New Dawn / Forever Light
          </button>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Independent economic reconciliation consulting for Indigenous communities and allies — the full file, not a single program type.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-fg hover:bg-accent-strong"
            >
              Get in touch
              <IconArrow />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-fg hover:bg-elevated"
            >
              How I work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="Growth I helped deliver" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <button type="button" className="fuse px-5 py-8 text-left sm:px-8" data-fuse onClick={() => spark("dawn")} aria-label="Grew BCM Indigenous Education Awards from 100 to 530 awards a year">
          <p className="font-display text-2xl text-fg tabular-nums">
            <CountUp from={100} to={530} />
          </p>
          <p className="mt-1 text-sm text-muted">Awards a year — grown from 100</p>
        </button>
        <button type="button" className="fuse px-5 py-8 text-left sm:px-8" data-fuse onClick={() => spark("dawn")} aria-label="Grew annual student support from 300 thousand to 1.6 million dollars">
          <p className="font-display text-2xl text-fg tabular-nums">
            <CountUp from={300_000} to={1_600_000} kind="money" />
          </p>
          <p className="mt-1 text-sm text-muted">Annual student support — from $300K</p>
        </button>
        <button type="button" className="fuse px-5 py-8 text-left sm:px-8" data-fuse onClick={() => spark("dawn")}>
          <p className="font-display text-2xl text-fg">Future 40</p>
          <p className="mt-1 text-sm text-muted">CBC Manitoba, 2025</p>
        </button>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-6 pt-1 text-xs leading-relaxed text-subtle sm:px-8">
        The Indigenous Education Awards are administered by the{" "}
        <a href={LINKS.iea} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-accent hover:underline">
          Business Council of Manitoba
        </a>
        . I helped BCM lead the program’s growth across Manitoba.
      </p>
    </section>
  );
}

const APPROACH = [
  {
    kicker: "01 — People",
    title: "People & Capacity",
    feature: false,
    image: "/images/approach-people-1100.webp",
    imageFallback: "/images/approach-people-1100.jpg",
    line: "Strategy starts with people. Education, workforce, and the relationships that make a project hold after the announcement.",
    points: [
      "Workforce and education as part of a larger strategy",
      "Capacity with communities, governments, and allies",
      "Systems that still work for families a generation from now",
    ],
  },
  {
    kicker: "02 — Land",
    title: "Systems that last",
    feature: false,
    image: "/images/approach-land-1100.webp",
    imageFallback: "/images/approach-land-1100.jpg",
    line: "Land, infrastructure, and tools only pay off when they serve community priorities — and allies who will do the work properly.",
    points: [
      "Technology guided by Indigenous priorities and values",
      "Energy and infrastructure that support community futures",
      "Systems designed for health and intergenerational prosperity",
    ],
  },
  {
    kicker: "03 — Capital · Founder & Principal",
    title: "Waaseyak",
    feature: true,
    image: "/images/approach-waaseyak-1100.webp",
    imageFallback: "/images/approach-waaseyak-1100.jpg",
    line: "I founded Waaseyak and serve as Principal. Prompt us your idea — we generate a high-level business plan, follow up with a preliminary, and book a discovery call soon after so the project starts moving.",
    points: [
      "Prompt your idea to Waaseyak",
      "Receive a high-level business plan",
      "Preliminary follow-up, then a discovery call to get you launched",
    ],
    cta: "Prompt your idea",
    href: "mailto:jessesteckley@gmail.com?subject=Waaseyak%20idea",
  },
];

export function Approach() {
  return (
    <section id="approach" className="below-fold border-t border-border bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">01 — Approach</p>
        <h2 className="max-w-2xl font-display text-2xl text-fg md:text-3xl">Wealth medicine in practice.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Real progress happens when Indigenous communities and allies move people, land, and systems together — for wellbeing that lasts more than one funding cycle.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {APPROACH.map((item) => (
            <article key={item.title} data-fuse className={(item.feature ? "case-tile md:col-span-2" : "case-tile") + " fuse"}>
              <figure>
                <picture>
                  <source srcSet={item.image} type="image/webp" />
                  <img src={item.imageFallback} alt="" />
                </picture>
              </figure>
              <div className="case-body">
                <p className="case-kicker">{item.kicker}</p>
                <h3 className="case-title">{item.title}</h3>
                <p className="case-line">{item.line}</p>
                <div className="case-meta">
                  {item.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                {"cta" in item && item.cta ? (
                  <a href={item.href} className="case-cta">
                    {item.cta}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="below-fold border-t border-border bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">02 — About</p>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="sticky top-24 font-display text-2xl leading-snug text-fg md:text-3xl">
              The work
              <br />
              behind the work
            </h2>
          </div>
          <div className="fuse space-y-6 rounded-xl p-1 text-lg leading-relaxed text-muted lg:col-span-8" data-fuse>
            <p>
              Jesse Steckley (Aubdauban — New Dawn / Forever Light) is a member of Wasauksing First Nation through the Robinson Huron Treaty of 1850. Raised in Barrie, Ontario, he is the son of Jeff Steckley of Midhurst and Tracey Pawis (Boshdayosgaykwe) of Wasauksing, founder of G’zaagin Art Gallery. His family roots include the Tabobondung and Pawis families of Wasauksing—among them his grandmother Audrey Gladys Pawis (PamajewonKwe), a long-time Community Health Representative who helped shape health and social programs in Wasauksing for more than twenty-five years; her husband Lorne Frederick Pawis, who served in the military; and Audrey’s father, Alfred Edward Waubgeshig Tabobondung, a former chief. On his father’s side, he comes from the Steckley family of Barrie, including his grandparents Keith Steckley and Annshiela Francis Young. His brother,{" "}
              <a href={LINKS.mangeshig} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">
                Josh Pawis-Steckley (Mangeshig)
              </a>
              , is a nationally recognized Indigenous children’s book illustrator.
            </p>
            <p>
              After beginning in the trades, Jesse completed the Aboriginal Community and Social Development diploma at Georgian College and continued at Trent University, studying Indigenous Studies with a minor in Business Administration. He later trained in web development at Juno College of Technology (2018–2019), covering HTML, CSS, responsive and accessible design, Sass, and JavaScript. That mix—practical work, Indigenous and business education, and modern web skills—shapes how he approaches economic reconciliation today, including independent advisory and, through Waaseyak — a company he owns — a prompt-your-idea path when a community is ready to launch.
            </p>
            <p>
              Jesse is best known for growing Manitoba’s largest{" "}
              <a href={LINKS.iea} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">
                Indigenous student awards program
              </a>{" "}
              from 100 awards valued at $300,000 to 530 awards and $1.6 million in support. He has also contributed to Indigenous procurement initiatives with the{" "}
              <a href={LINKS.ccib} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">
                Canadian Council for Indigenous Business
              </a>{" "}
              and takes on the full range of economic reconciliation work with Indigenous communities and allies. In 2025, he was named to{" "}
              <a href={LINKS.cbc} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">
                CBC Manitoba’s Future 40
              </a>{" "}
              for leadership in economic reconciliation.
            </p>
            <p>
              Jesse’s personal consulting sits with Indigenous communities and allies on the full economic reconciliation file. He also owns Waaseyak, a separate company for prompting an idea, generating a high-level plan, and moving toward capital and launch. He is the husband of Nicola Little, Artist & Cultural Connector from Garden Hill First Nation (Treaty 5), who has more than 15 years in the arts and cultural sector, and the father of Charlie and Zaagaasgeh Lucy. He lives in Winnipeg on Treaty 1 Territory.
            </p>
            <p className="text-base text-subtle">
              This site is a simple point of contact. If you are an Indigenous community or an ally working on economic reconciliation — I’d welcome the conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const IMPACT = [
  {
    title: "Future 40",
    sub: "CBC Manitoba · 2025",
    href: LINKS.cbc,
    logo: "/images/logo-cbc.png",
    body: "Recognized among Manitoba’s top young leaders for contributions to economic reconciliation through education and employment programming.",
  },
  {
    title: "Workforce",
    sub: "BCM · Indigenous Education Awards",
    href: LINKS.iea,
    logo: "/images/logo-iea.png",
    body: "The Indigenous Education Awards are administered by the Business Council of Manitoba. I helped BCM lead the program’s growth across Manitoba — from 100 awards ($300,000) to 530 awards and $1.6M in annual student support.",
  },
  {
    title: "Procurement",
    sub: "CCIB · Supply Change",
    href: LINKS.ccib,
    logo: "/images/logo-ccib.png",
    body: "Contributed to early work on Indigenous procurement approaches aimed at increasing meaningful economic participation and business opportunity.",
  },
];

type ContribDay = { date: string; count: number; level: number };

function GitHubContributions() {
  const [days, setDays] = useState<ContribDay[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [litDay, setLitDay] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${SITE.githubUser}?y=2026`)
      .then((res) => {
        if (!res.ok) throw new Error("contrib fetch failed");
        return res.json() as Promise<{ total?: Record<string, number>; contributions: ContribDay[] }>;
      })
      .then((data) => {
        if (cancelled) return;
        setDays(data.contributions ?? []);
        setTotal(data.total?.["2026"] ?? data.contributions.reduce((sum, d) => sum + d.count, 0));
      })
      .catch(() => {
        if (!cancelled) {
          setDays([]);
          setTotal(8);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => {
    if (!days?.length) return [];
    const byDate = new Map(days.map((d) => [d.date, d]));
    const start = new Date(Date.UTC(2026, 0, 1));
    while (start.getUTCDay() !== 0) start.setUTCDate(start.getUTCDate() - 1);
    const end = new Date(Date.UTC(2026, 11, 31));
    while (end.getUTCDay() !== 6) end.setUTCDate(end.getUTCDate() + 1);
    const columns: ContribDay[][] = [];
    let week: ContribDay[] = [];
    for (let t = start.getTime(); t <= end.getTime(); t += 86400000) {
      const dt = new Date(t);
      const key = dt.toISOString().slice(0, 10);
      const found = byDate.get(key);
      week.push(found ?? { date: key, count: 0, level: dt.getUTCFullYear() === 2026 ? 0 : -1 });
      if (week.length === 7) {
        columns.push(week);
        week = [];
      }
    }
    return columns;
  }, [days]);

  const colors = ["#161b22", "#3d3226", "#6b5338", "#9a7548", "#c49a63"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const cell = 12;
  const gap = 3;
  const left = 32;
  const top = 28;
  const width = left + Math.max(weeks.length, 1) * (cell + gap) + 8;
  const height = top + 7 * (cell + gap) + 26;

  const monthLabels: { x: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const d = week.find((day) => day.level >= 0);
    if (!d) return;
    const month = Number(d.date.slice(5, 7)) - 1;
    if (month !== lastMonth) {
      monthLabels.push({ x: left + wi * (cell + gap), label: months[month] });
      lastMonth = month;
    }
  });

  return (
    <div className="fuse mt-12 rounded-xl border border-border bg-elevated p-5 sm:p-7" data-fuse>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">GitHub</p>
          <p className="mt-2 text-sm text-muted">
            <span className="font-medium text-fg">{total ?? "—"} contributions</span> in 2026 · building in public
          </p>
        </div>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong"
        >
          github.com/{SITE.githubUser}
          <IconArrow />
        </a>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
        I build practical tools with AI for Indigenous communities and allies — websites and apps when asked. Larger projects are scoped so I can assemble a team and stay until the work meets the community’s standard.
      </p>
      <div className="overflow-x-auto">
        {weeks.length ? (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto w-full min-w-[680px]"
            role="img"
            aria-label={`${total ?? 0} GitHub contributions in 2026`}
          >
            {monthLabels.map((m) => (
              <text key={m.label + m.x} x={m.x} y={16} fill="#efe6d4" fillOpacity="0.5" fontSize="11" fontFamily="system-ui,sans-serif">
                {m.label}
              </text>
            ))}
            {[
              ["Mon", 1],
              ["Wed", 3],
              ["Fri", 5],
            ].map(([label, row]) => (
              <text
                key={label}
                x={2}
                y={top + Number(row) * (cell + gap) + 10}
                fill="#efe6d4"
                fillOpacity="0.5"
                fontSize="10"
                fontFamily="system-ui,sans-serif"
              >
                {label}
              </text>
            ))}
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                if (day.level < 0) return null;
                const level = Math.max(0, Math.min(4, day.level));
                return (
                  <rect
                    key={day.date}
                    x={left + wi * (cell + gap)}
                    y={top + di * (cell + gap)}
                    width={cell}
                    height={cell}
                    rx={2}
                    className="egg-cell"
                    fill={litDay === day.date ? "#efe6d4" : colors[level]}
                    onClick={() => {
                      setLitDay(day.date);
                      if (day.count > 0) spark("forever");
                    }}
                  >
                    <title>
                      {day.date}: {day.count} contribution{day.count === 1 ? "" : "s"}
                    </title>
                  </rect>
                );
              }),
            )}
            <text x={width - 148} y={height - 8} fill="#efe6d4" fillOpacity="0.5" fontSize="10" fontFamily="system-ui,sans-serif">
              Less
            </text>
            {colors.map((c, i) => (
              <rect key={c} x={width - 118 + i * 14} y={height - 18} width={11} height={11} rx={2} fill={c} />
            ))}
            <text x={width - 44} y={height - 8} fill="#efe6d4" fillOpacity="0.5" fontSize="10" fontFamily="system-ui,sans-serif">
              More
            </text>
          </svg>
        ) : (
          <p className="text-sm text-subtle">Loading contribution activity…</p>
        )}
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="below-fold border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">03 — Impact</p>
        <h2 className="font-display text-2xl text-fg">Selected impact</h2>
        <p className="mt-3 max-w-xl text-muted">Markers of the work so far — not the whole mandate. Economic reconciliation is broader than any one program.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {IMPACT.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              data-fuse
              className="fuse relative group flex flex-col rounded-xl bg-elevated p-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]"
            >
              <div className="flex items-start justify-between gap-3">
                <img src={card.logo} alt="" width={72} height={28} className="h-7 w-auto object-contain opacity-90" />
                <IconArrow className="text-subtle group-hover:text-accent" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{card.title}</div>
              <div className="mt-2 text-sm text-subtle">{card.sub}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted group-hover:text-fg/85">{card.body}</p>
            </a>
          ))}
        </div>
        <GitHubContributions />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="below-fold border-t border-border bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">04 — FAQ</p>
        <h2 className="font-display text-2xl text-fg">Common questions</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="fuse group rounded-md py-5"
              data-fuse
              onToggle={(event) => {
                const el = event.currentTarget;
                el.classList.remove("fuse-pulse");
                void el.offsetWidth;
                el.classList.add("fuse-pulse");
                window.setTimeout(() => el.classList.remove("fuse-pulse"), 750);
              }}
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-fg">
                {item.q}
                <span className="text-subtle transition-transform duration-150 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(SITE.email).then(done).catch(() => {
        window.location.href = `mailto:${SITE.email}`;
      });
      return;
    }
    window.location.href = `mailto:${SITE.email}`;
  }

  return (
    <section id="contact" className="below-fold border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">05 — Contact</p>
        <h2 className="font-display text-2xl text-fg">Let’s talk</h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          For personal consulting, write directly. If you want to prompt an idea into a plan and a discovery call, that path is Waaseyak — a company I own.
        </p>
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Email</p>
          <a href={`mailto:${SITE.email}`} className="mt-2 inline-block text-xl font-semibold text-accent hover:text-accent-strong sm:text-2xl">
            {SITE.email}
          </a>
          <div className="mt-4">
            <button
              type="button"
              onClick={copyEmail}
              data-fuse
              className={"fuse relative inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-fg hover:bg-elevated transition-[background-color] duration-150" + (copied ? " fuse-pulse" : "")}
            >
              {copied ? <IconCheck /> : null}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>
        <p className="mt-10 text-sm text-subtle">
          Prefer social? Connect on{" "}
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            LinkedIn
          </a>
          ,{" "}
          <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            X
          </a>
          , or{" "}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-subtle sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Jesse Steckley · personal consulting. Waaseyak is a separate company.</p>
        <p className="flex items-center gap-2">
          Winnipeg · Treaty 1 Territory
          <button type="button" className="egg-ember" aria-label="A quiet light" onClick={() => spark("forever")} />
        </p>
      </div>
    </footer>
  );
}

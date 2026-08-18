import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Approach,
  Contact,
  Faq,
  Footer,
  Hero,
  Impact,
  Nav,
  SkipLink,
  Stats,
} from "@/components/site/SiteChrome";
import { JsonLd } from "@/components/site/JsonLd";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd />
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Approach />
        <About />
        <Impact />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

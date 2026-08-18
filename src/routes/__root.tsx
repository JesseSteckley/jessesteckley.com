import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const host = import.meta.env.VITE_PUBLIC_HOSTNAME as string | undefined;
const ogImage = host ? `https://${host}/og.jpg` : SITE.image;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { name: "keywords", content: SITE.keywords.join(", ") },
      { name: "author", content: SITE.name },
      { name: "creator", content: SITE.name },
      { name: "publisher", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: SITE.themeColor },
      { name: "color-scheme", content: "dark" },
      { name: "apple-mobile-web-app-title", content: SITE.name },
      { name: "application-name", content: SITE.name },
      { name: "format-detection", content: "telephone=no" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "geo.region", content: "CA-MB" },
      { name: "geo.placename", content: "Winnipeg" },
      { name: "geo.position", content: "49.8951;-97.1384" },
      { name: "ICBM", content: "49.8951, -97.1384" },
      { name: "revised", content: SITE.lastUpdated },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
      { property: "og:locale", content: SITE.locale },
      { property: "profile:first_name", content: "Jesse" },
      { property: "profile:last_name", content: "Steckley" },
      { property: "profile:username", content: "JesseSteckley" },
      { property: "og:image", content: ogImage },
      { property: "og:image:secure_url", content: ogImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Jesse Steckley, Economic Reconciliation Strategist" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:creator", content: SITE.twitterHandle },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Jesse Steckley, Economic Reconciliation Strategist" },
      { name: "twitter:label1", content: "Role" },
      { name: "twitter:data1", content: SITE.shortTitle },
      { name: "twitter:label2", content: "Based in" },
      { name: "twitter:data2", content: "Winnipeg · Treaty 1" },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "alternate", hrefLang: "en-CA", href: SITE.url },
      { rel: "alternate", hrefLang: "x-default", href: SITE.url },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=sun" },
      { rel: "apple-touch-icon", href: "/icon-180-sun.png" },
      { rel: "author", href: "/humans.txt" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preload", as: "font", href: "/fonts/newsreader-600.woff2", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "me", href: SITE.twitter },
      { rel: "me", href: SITE.linkedin },
      { rel: "me", href: SITE.github },
      { rel: "me", href: `mailto:${SITE.email}` },
    ],
    scripts: [
      {
        defer: true,
        src: "https://plausible.io/js/script.tagged-events.js",
        "data-domain": "jessesteckley.com",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

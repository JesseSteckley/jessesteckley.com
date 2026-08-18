import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";
import { Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="font-display text-2xl">Page not found</h1>
      <p className="max-w-md text-muted">The page you requested isn’t here.</p>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-fg"
      >
        Back home
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: false,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}

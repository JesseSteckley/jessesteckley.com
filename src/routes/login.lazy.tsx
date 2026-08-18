import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <main className="min-h-screen grid place-items-center bg-bg px-6 text-fg">
      <div className="w-full max-w-sm space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Jesse Steckley</p>
          <h1 className="font-display text-3xl text-fg">Sign in</h1>
          <p className="mt-2 text-sm text-muted">Private access only.</p>
        </div>
        {authEnabled ? (
          <div className="space-y-3">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="w-full min-h-11 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-fg hover:bg-elevated transition-[background-color] duration-150"
              >
                Continue with {p.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
        <Link to="/" className="inline-block text-sm text-accent hover:text-accent-strong">
          Back to site
        </Link>
      </div>
    </main>
  );
}

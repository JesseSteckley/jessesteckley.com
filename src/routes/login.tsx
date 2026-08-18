import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Jesse Steckley" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

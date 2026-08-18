/**
 * Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
 * (and later receive registered routes). Noops when the app is not embedded.
 */

import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  collectRoutePathsFromTree,
  installPreviewHostBridge,
} from "@/lib/preview-host-bridge";

export function PreviewHostBridge() {
  const router = useRouter();

  useEffect(() => {
    let unsub: (() => void) | undefined;
    const install = () => {
      unsub = installPreviewHostBridge({
        navigate: (path) => {
          router.history.push(path);
        },
        getRoutePaths: () => collectRoutePathsFromTree(router.routeTree),
      });
    };

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(install, { timeout: 1800 });
      return () => {
        cancelIdleCallback(id);
        unsub?.();
      };
    }

    const t = window.setTimeout(install, 1);
    return () => {
      window.clearTimeout(t);
      unsub?.();
    };
  }, [router]);

  return null;
}

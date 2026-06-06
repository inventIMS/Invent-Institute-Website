"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

export default function LazyParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait until the page content has painted, then load particles
    const id = requestIdleCallback(() => setReady(true), { timeout: 3000 });
    return () => cancelIdleCallback(id);
  }, []);

  if (!ready) return null;
  return <ParticleBackground />;
}

import type { IOxford } from "../../../types/index.js";

export const dir_sl: Record<string, () => Promise<IOxford>> = {
  "slam": () => import("./slam.json") as unknown as Promise<IOxford>,
  "slap": () => import("./slap.json") as unknown as Promise<IOxford>,
  "slash": () => import("./slash.json") as unknown as Promise<IOxford>,
  "slave": () => import("./slave.json") as unknown as Promise<IOxford>,
  "slavery": () => import("./slavery.json") as unknown as Promise<IOxford>,
  "sleep": () => import("./sleep.json") as unknown as Promise<IOxford>,
  "slender": () => import("./slender.json") as unknown as Promise<IOxford>,
  "slice": () => import("./slice.json") as unknown as Promise<IOxford>,
  "slide": () => import("./slide.json") as unknown as Promise<IOxford>,
  "slight": () => import("./slight.json") as unknown as Promise<IOxford>,
  "slightly": () => import("./slightly.json") as unknown as Promise<IOxford>,
  "slim": () => import("./slim.json") as unknown as Promise<IOxford>,
  "slip": () => import("./slip.json") as unknown as Promise<IOxford>,
  "slogan": () => import("./slogan.json") as unknown as Promise<IOxford>,
  "slope": () => import("./slope.json") as unknown as Promise<IOxford>,
  "slot": () => import("./slot.json") as unknown as Promise<IOxford>,
  "slow": () => import("./slow.json") as unknown as Promise<IOxford>,
  "slowly": () => import("./slowly.json") as unknown as Promise<IOxford>,
};

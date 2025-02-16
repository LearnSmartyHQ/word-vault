import type { IOxford } from "../../../types/index.js";

export const dir_sw: Record<string, () => Promise<IOxford>> = {
  "swallow": () => import("./swallow.json") as unknown as Promise<IOxford>,
  "swap": () => import("./swap.json") as unknown as Promise<IOxford>,
  "swarm": () => import("./swarm.json") as unknown as Promise<IOxford>,
  "swear": () => import("./swear.json") as unknown as Promise<IOxford>,
  "sweater": () => import("./sweater.json") as unknown as Promise<IOxford>,
  "sweep": () => import("./sweep.json") as unknown as Promise<IOxford>,
  "sweet": () => import("./sweet.json") as unknown as Promise<IOxford>,
  "swim": () => import("./swim.json") as unknown as Promise<IOxford>,
  "swimming": () => import("./swimming.json") as unknown as Promise<IOxford>,
  "swing": () => import("./swing.json") as unknown as Promise<IOxford>,
  "switch": () => import("./switch.json") as unknown as Promise<IOxford>,
  "sword": () => import("./sword.json") as unknown as Promise<IOxford>,
};

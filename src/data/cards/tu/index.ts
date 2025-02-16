import type { IOxford } from "../../../types/index.js";

export const dir_tu: Record<string, () => Promise<IOxford>> = {
  "tube": () => import("./tube.json") as unknown as Promise<IOxford>,
  "tuesday": () => import("./tuesday.json") as unknown as Promise<IOxford>,
  "tuition": () => import("./tuition.json") as unknown as Promise<IOxford>,
  "tumor": () => import("./tumor.json") as unknown as Promise<IOxford>,
  "tumult": () => import("./tumult.json") as unknown as Promise<IOxford>,
  "tune": () => import("./tune.json") as unknown as Promise<IOxford>,
  "tunnel": () => import("./tunnel.json") as unknown as Promise<IOxford>,
  "turn": () => import("./turn.json") as unknown as Promise<IOxford>,
  "turnout": () => import("./turnout.json") as unknown as Promise<IOxford>,
  "turnover": () => import("./turnover.json") as unknown as Promise<IOxford>,
};

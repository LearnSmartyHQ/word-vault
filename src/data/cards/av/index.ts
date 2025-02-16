import type { IOxford } from "../../../types/index.js";

export const dir_av: Record<string, () => Promise<IOxford>> = {
  "availability": () => import("./availability.json") as unknown as Promise<IOxford>,
  "available": () => import("./available.json") as unknown as Promise<IOxford>,
  "average": () => import("./average.json") as unknown as Promise<IOxford>,
  "avoid": () => import("./avoid.json") as unknown as Promise<IOxford>,
};

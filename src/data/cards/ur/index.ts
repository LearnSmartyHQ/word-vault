import type { IOxford } from "../../../types/index.js";

export const dir_ur: Record<string, () => Promise<IOxford>> = {
  "urban": () => import("./urban.json") as unknown as Promise<IOxford>,
  "urge": () => import("./urge.json") as unknown as Promise<IOxford>,
  "urgent": () => import("./urgent.json") as unknown as Promise<IOxford>,
};

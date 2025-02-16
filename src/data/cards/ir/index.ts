import type { IOxford } from "../../../types/index.js";

export const dir_ir: Record<string, () => Promise<IOxford>> = {
  "iron": () => import("./iron.json") as unknown as Promise<IOxford>,
  "ironic": () => import("./ironic.json") as unknown as Promise<IOxford>,
  "ironically": () => import("./ironically.json") as unknown as Promise<IOxford>,
  "irony": () => import("./irony.json") as unknown as Promise<IOxford>,
  "irrelevant": () => import("./irrelevant.json") as unknown as Promise<IOxford>,
};

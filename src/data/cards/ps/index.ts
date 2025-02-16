import type { IOxford } from "../../../types/index.js";

export const dir_ps: Record<string, () => Promise<IOxford>> = {
  "psychiatric": () => import("./psychiatric.json") as unknown as Promise<IOxford>,
  "psychological": () => import("./psychological.json") as unknown as Promise<IOxford>,
  "psychologist": () => import("./psychologist.json") as unknown as Promise<IOxford>,
  "psychology": () => import("./psychology.json") as unknown as Promise<IOxford>,
};

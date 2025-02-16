import type { IOxford } from "../../../types/index.js";

export const dir_ow: Record<string, () => Promise<IOxford>> = {
  "owe": () => import("./owe.json") as unknown as Promise<IOxford>,
  "own": () => import("./own.json") as unknown as Promise<IOxford>,
  "owner": () => import("./owner.json") as unknown as Promise<IOxford>,
  "ownership": () => import("./ownership.json") as unknown as Promise<IOxford>,
};

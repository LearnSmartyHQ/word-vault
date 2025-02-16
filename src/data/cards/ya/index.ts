import type { IOxford } from "../../../types/index.js";

export const dir_ya: Record<string, () => Promise<IOxford>> = {
  "yard": () => import("./yard.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_gh: Record<string, () => Promise<IOxford>> = {
  "ghost": () => import("./ghost.json") as unknown as Promise<IOxford>,
};

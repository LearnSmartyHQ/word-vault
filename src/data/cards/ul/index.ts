import type { IOxford } from "../../../types/index.js";

export const dir_ul: Record<string, () => Promise<IOxford>> = {
  "ultimate": () => import("./ultimate.json") as unknown as Promise<IOxford>,
  "ultimately": () => import("./ultimately.json") as unknown as Promise<IOxford>,
};

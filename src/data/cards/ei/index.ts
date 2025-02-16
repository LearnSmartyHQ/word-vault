import type { IOxford } from "../../../types/index.js";

export const dir_ei: Record<string, () => Promise<IOxford>> = {
  "eight": () => import("./eight.json") as unknown as Promise<IOxford>,
  "eighteen": () => import("./eighteen.json") as unknown as Promise<IOxford>,
  "eighty": () => import("./eighty.json") as unknown as Promise<IOxford>,
  "either": () => import("./either.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_mr: Record<string, () => Promise<IOxford>> = {
  "mrs": () => import("./mrs.json") as unknown as Promise<IOxford>,
};

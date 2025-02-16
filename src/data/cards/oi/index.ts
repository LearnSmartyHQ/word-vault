import type { IOxford } from "../../../types/index.js";

export const dir_oi: Record<string, () => Promise<IOxford>> = {
  "oil": () => import("./oil.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_ot: Record<string, () => Promise<IOxford>> = {
  "other": () => import("./other.json") as unknown as Promise<IOxford>,
  "others": () => import("./others.json") as unknown as Promise<IOxford>,
  "otherwise": () => import("./otherwise.json") as unknown as Promise<IOxford>,
};

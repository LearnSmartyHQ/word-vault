import type { IOxford } from "../../../types/index.js";

export const dir_dw: Record<string, () => Promise<IOxford>> = {
  "dwindle": () => import("./dwindle.json") as unknown as Promise<IOxford>,
};

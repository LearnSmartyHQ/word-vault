import { IOxford } from "../../../types/index.js";

export const dir_eu: Record<string, () => Promise<IOxford>> = {
  "euro": () => import("./euro.json") as unknown as Promise<IOxford>,
  "europe": () => import("./europe.json") as unknown as Promise<IOxford>,
};

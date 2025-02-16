import { IOxford } from "../../../types/index.js";

export const dir_ic: Record<string, () => Promise<IOxford>> = {
  "ice-cream": () => import("./ice-cream.json") as unknown as Promise<IOxford>,
  "ice": () => import("./ice.json") as unknown as Promise<IOxford>,
  "icon": () => import("./icon.json") as unknown as Promise<IOxford>,
};

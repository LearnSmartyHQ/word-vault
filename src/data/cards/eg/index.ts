import { IOxford } from "../../../types/index.js";

export const dir_eg: Record<string, () => Promise<IOxford>> = {
  "egg": () => import("./egg.json") as unknown as Promise<IOxford>,
  "ego": () => import("./ego.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_ut: Record<string, () => Promise<IOxford>> = {
  "utensil": () => import("./utensil.json") as unknown as Promise<IOxford>,
  "utility": () => import("./utility.json") as unknown as Promise<IOxford>,
  "utilize": () => import("./utilize.json") as unknown as Promise<IOxford>,
  "utter": () => import("./utter.json") as unknown as Promise<IOxford>,
  "utterly": () => import("./utterly.json") as unknown as Promise<IOxford>,
};

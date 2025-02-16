import type { IOxford } from "../../../types/index.js";

export const dir_ga: Record<string, () => Promise<IOxford>> = {
  "gain": () => import("./gain.json") as unknown as Promise<IOxford>,
  "gallant": () => import("./gallant.json") as unknown as Promise<IOxford>,
  "gallery": () => import("./gallery.json") as unknown as Promise<IOxford>,
  "gallon": () => import("./gallon.json") as unknown as Promise<IOxford>,
  "gambling": () => import("./gambling.json") as unknown as Promise<IOxford>,
  "game": () => import("./game.json") as unknown as Promise<IOxford>,
  "gaming": () => import("./gaming.json") as unknown as Promise<IOxford>,
  "gang": () => import("./gang.json") as unknown as Promise<IOxford>,
  "gap": () => import("./gap.json") as unknown as Promise<IOxford>,
  "garage": () => import("./garage.json") as unknown as Promise<IOxford>,
  "garbage": () => import("./garbage.json") as unknown as Promise<IOxford>,
  "garden": () => import("./garden.json") as unknown as Promise<IOxford>,
  "garlic": () => import("./garlic.json") as unknown as Promise<IOxford>,
  "gas": () => import("./gas.json") as unknown as Promise<IOxford>,
  "gasoline": () => import("./gasoline.json") as unknown as Promise<IOxford>,
  "gate": () => import("./gate.json") as unknown as Promise<IOxford>,
  "gather": () => import("./gather.json") as unknown as Promise<IOxford>,
  "gathering": () => import("./gathering.json") as unknown as Promise<IOxford>,
  "gay": () => import("./gay.json") as unknown as Promise<IOxford>,
  "gaze": () => import("./gaze.json") as unknown as Promise<IOxford>,
};

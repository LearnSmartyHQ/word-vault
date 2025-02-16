import type { IOxford } from "../../../types/index.js";

export const dir_nu: Record<string, () => Promise<IOxford>> = {
  "nuclear": () => import("./nuclear.json") as unknown as Promise<IOxford>,
  "nuisance": () => import("./nuisance.json") as unknown as Promise<IOxford>,
  "numb": () => import("./numb.json") as unknown as Promise<IOxford>,
  "number": () => import("./number.json") as unknown as Promise<IOxford>,
  "numerous": () => import("./numerous.json") as unknown as Promise<IOxford>,
  "nurse": () => import("./nurse.json") as unknown as Promise<IOxford>,
  "nursery": () => import("./nursery.json") as unknown as Promise<IOxford>,
  "nursing": () => import("./nursing.json") as unknown as Promise<IOxford>,
  "nut": () => import("./nut.json") as unknown as Promise<IOxford>,
  "nutrition": () => import("./nutrition.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_eq: Record<string, () => Promise<IOxford>> = {
  "equal": () => import("./equal.json") as unknown as Promise<IOxford>,
  "equality": () => import("./equality.json") as unknown as Promise<IOxford>,
  "equally": () => import("./equally.json") as unknown as Promise<IOxford>,
  "equation": () => import("./equation.json") as unknown as Promise<IOxford>,
  "equip": () => import("./equip.json") as unknown as Promise<IOxford>,
  "equipment": () => import("./equipment.json") as unknown as Promise<IOxford>,
  "equivalent": () => import("./equivalent.json") as unknown as Promise<IOxford>,
};

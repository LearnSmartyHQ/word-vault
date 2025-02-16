import { IOxford } from "../../../types/index.js";

export const dir_sn: Record<string, () => Promise<IOxford>> = {
  "snake": () => import("./snake.json") as unknown as Promise<IOxford>,
  "snap": () => import("./snap.json") as unknown as Promise<IOxford>,
  "sneaker": () => import("./sneaker.json") as unknown as Promise<IOxford>,
  "sneer": () => import("./sneer.json") as unknown as Promise<IOxford>,
  "snow": () => import("./snow.json") as unknown as Promise<IOxford>,
};

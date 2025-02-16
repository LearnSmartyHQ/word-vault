import { IOxford } from "../../../types/index.js";

export const dir_tw: Record<string, () => Promise<IOxford>> = {
  "twelve": () => import("./twelve.json") as unknown as Promise<IOxford>,
  "twenty": () => import("./twenty.json") as unknown as Promise<IOxford>,
  "twice": () => import("./twice.json") as unknown as Promise<IOxford>,
  "twin": () => import("./twin.json") as unknown as Promise<IOxford>,
  "twist": () => import("./twist.json") as unknown as Promise<IOxford>,
  "two": () => import("./two.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_my: Record<string, () => Promise<IOxford>> = {
  "my": () => import("./my.json") as unknown as Promise<IOxford>,
  "myself": () => import("./myself.json") as unknown as Promise<IOxford>,
  "mysterious": () => import("./mysterious.json") as unknown as Promise<IOxford>,
  "mystery": () => import("./mystery.json") as unknown as Promise<IOxford>,
  "myth": () => import("./myth.json") as unknown as Promise<IOxford>,
  "mythology": () => import("./mythology.json") as unknown as Promise<IOxford>,
};

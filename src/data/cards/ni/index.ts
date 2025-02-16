import { IOxford } from "../../../types/index.js";

export const dir_ni: Record<string, () => Promise<IOxford>> = {
  "nice": () => import("./nice.json") as unknown as Promise<IOxford>,
  "nicely": () => import("./nicely.json") as unknown as Promise<IOxford>,
  "niche": () => import("./niche.json") as unknown as Promise<IOxford>,
  "nickel": () => import("./nickel.json") as unknown as Promise<IOxford>,
  "night": () => import("./night.json") as unknown as Promise<IOxford>,
  "nightmare": () => import("./nightmare.json") as unknown as Promise<IOxford>,
  "nil": () => import("./nil.json") as unknown as Promise<IOxford>,
  "nimble": () => import("./nimble.json") as unknown as Promise<IOxford>,
  "nine": () => import("./nine.json") as unknown as Promise<IOxford>,
  "nineteen": () => import("./nineteen.json") as unknown as Promise<IOxford>,
  "ninety": () => import("./ninety.json") as unknown as Promise<IOxford>,
};

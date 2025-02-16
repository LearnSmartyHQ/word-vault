import { IOxford } from "../../../types/index.js";

export const dir_ab: Record<string, () => Promise<IOxford>> = {
  "abandon": () => import("./abandon.json") as unknown as Promise<IOxford>,
  "abide": () => import("./abide.json") as unknown as Promise<IOxford>,
  "ability": () => import("./ability.json") as unknown as Promise<IOxford>,
  "able": () => import("./able.json") as unknown as Promise<IOxford>,
  "abolish": () => import("./abolish.json") as unknown as Promise<IOxford>,
  "abortion": () => import("./abortion.json") as unknown as Promise<IOxford>,
  "about": () => import("./about.json") as unknown as Promise<IOxford>,
  "above": () => import("./above.json") as unknown as Promise<IOxford>,
  "abroad": () => import("./abroad.json") as unknown as Promise<IOxford>,
  "absence": () => import("./absence.json") as unknown as Promise<IOxford>,
  "absent": () => import("./absent.json") as unknown as Promise<IOxford>,
  "absolute": () => import("./absolute.json") as unknown as Promise<IOxford>,
  "absolutely": () => import("./absolutely.json") as unknown as Promise<IOxford>,
  "absorb": () => import("./absorb.json") as unknown as Promise<IOxford>,
  "abstract": () => import("./abstract.json") as unknown as Promise<IOxford>,
  "absurd": () => import("./absurd.json") as unknown as Promise<IOxford>,
  "abundance": () => import("./abundance.json") as unknown as Promise<IOxford>,
  "abundant": () => import("./abundant.json") as unknown as Promise<IOxford>,
  "abuse": () => import("./abuse.json") as unknown as Promise<IOxford>,
};

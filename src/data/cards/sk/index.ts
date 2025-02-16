import { IOxford } from "../../../types/index.js";

export const dir_sk: Record<string, () => Promise<IOxford>> = {
  "skeptical": () => import("./skeptical.json") as unknown as Promise<IOxford>,
  "sketch": () => import("./sketch.json") as unknown as Promise<IOxford>,
  "ski": () => import("./ski.json") as unknown as Promise<IOxford>,
  "skiing": () => import("./skiing.json") as unknown as Promise<IOxford>,
  "skill": () => import("./skill.json") as unknown as Promise<IOxford>,
  "skilled": () => import("./skilled.json") as unknown as Promise<IOxford>,
  "skim": () => import("./skim.json") as unknown as Promise<IOxford>,
  "skin": () => import("./skin.json") as unknown as Promise<IOxford>,
  "skip": () => import("./skip.json") as unknown as Promise<IOxford>,
  "skirt": () => import("./skirt.json") as unknown as Promise<IOxford>,
  "skull": () => import("./skull.json") as unknown as Promise<IOxford>,
  "sky": () => import("./sky.json") as unknown as Promise<IOxford>,
};

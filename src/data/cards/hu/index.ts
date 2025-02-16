import { IOxford } from "../../../types/index.js";

export const dir_hu: Record<string, () => Promise<IOxford>> = {
  "huge": () => import("./huge.json") as unknown as Promise<IOxford>,
  "hullo": () => import("./hullo.json") as unknown as Promise<IOxford>,
  "human": () => import("./human.json") as unknown as Promise<IOxford>,
  "humanitarian": () => import("./humanitarian.json") as unknown as Promise<IOxford>,
  "humanity": () => import("./humanity.json") as unknown as Promise<IOxford>,
  "humble": () => import("./humble.json") as unknown as Promise<IOxford>,
  "humid": () => import("./humid.json") as unknown as Promise<IOxford>,
  "humor": () => import("./humor.json") as unknown as Promise<IOxford>,
  "humorous": () => import("./humorous.json") as unknown as Promise<IOxford>,
  "humour": () => import("./humour.json") as unknown as Promise<IOxford>,
  "hundred": () => import("./hundred.json") as unknown as Promise<IOxford>,
  "hunger": () => import("./hunger.json") as unknown as Promise<IOxford>,
  "hungry": () => import("./hungry.json") as unknown as Promise<IOxford>,
  "hunt": () => import("./hunt.json") as unknown as Promise<IOxford>,
  "hunting": () => import("./hunting.json") as unknown as Promise<IOxford>,
  "hurricane": () => import("./hurricane.json") as unknown as Promise<IOxford>,
  "hurry": () => import("./hurry.json") as unknown as Promise<IOxford>,
  "hurt": () => import("./hurt.json") as unknown as Promise<IOxford>,
  "husband": () => import("./husband.json") as unknown as Promise<IOxford>,
};

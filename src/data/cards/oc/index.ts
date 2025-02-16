import { IOxford } from "../../../types/index.js";

export const dir_oc: Record<string, () => Promise<IOxford>> = {
  "occasion": () => import("./occasion.json") as unknown as Promise<IOxford>,
  "occasional": () => import("./occasional.json") as unknown as Promise<IOxford>,
  "occasionally": () => import("./occasionally.json") as unknown as Promise<IOxford>,
  "occupant": () => import("./occupant.json") as unknown as Promise<IOxford>,
  "occupation": () => import("./occupation.json") as unknown as Promise<IOxford>,
  "occupy": () => import("./occupy.json") as unknown as Promise<IOxford>,
  "occur": () => import("./occur.json") as unknown as Promise<IOxford>,
  "occurrence": () => import("./occurrence.json") as unknown as Promise<IOxford>,
  "ocean": () => import("./ocean.json") as unknown as Promise<IOxford>,
  "october": () => import("./october.json") as unknown as Promise<IOxford>,
};

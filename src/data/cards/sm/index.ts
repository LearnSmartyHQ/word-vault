import { IOxford } from "../../../types/index.js";

export const dir_sm: Record<string, () => Promise<IOxford>> = {
  "small": () => import("./small.json") as unknown as Promise<IOxford>,
  "smart": () => import("./smart.json") as unknown as Promise<IOxford>,
  "smartphone": () => import("./smartphone.json") as unknown as Promise<IOxford>,
  "smash": () => import("./smash.json") as unknown as Promise<IOxford>,
  "smell": () => import("./smell.json") as unknown as Promise<IOxford>,
  "smile": () => import("./smile.json") as unknown as Promise<IOxford>,
  "smoke": () => import("./smoke.json") as unknown as Promise<IOxford>,
  "smoking": () => import("./smoking.json") as unknown as Promise<IOxford>,
  "smooth": () => import("./smooth.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_ai: Record<string, () => Promise<IOxford>> = {
  "aid": () => import("./aid.json") as unknown as Promise<IOxford>,
  "aide": () => import("./aide.json") as unknown as Promise<IOxford>,
  "aids": () => import("./aids.json") as unknown as Promise<IOxford>,
  "aim": () => import("./aim.json") as unknown as Promise<IOxford>,
  "air": () => import("./air.json") as unknown as Promise<IOxford>,
  "aircraft": () => import("./aircraft.json") as unknown as Promise<IOxford>,
  "airline": () => import("./airline.json") as unknown as Promise<IOxford>,
  "airport": () => import("./airport.json") as unknown as Promise<IOxford>,
};

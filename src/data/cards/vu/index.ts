import { IOxford } from "../../../types/index.js";

export const dir_vu: Record<string, () => Promise<IOxford>> = {
  "vulnerability": () => import("./vulnerability.json") as unknown as Promise<IOxford>,
  "vulnerable": () => import("./vulnerable.json") as unknown as Promise<IOxford>,
};

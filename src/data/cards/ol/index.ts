import { IOxford } from "../../../types/index.js";

export const dir_ol: Record<string, () => Promise<IOxford>> = {
  "old-fashioned": () => import("./old-fashioned.json") as unknown as Promise<IOxford>,
  "old": () => import("./old.json") as unknown as Promise<IOxford>,
};

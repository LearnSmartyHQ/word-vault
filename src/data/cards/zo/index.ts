import { IOxford } from "../../../types/index.js";

export const dir_zo: Record<string, () => Promise<IOxford>> = {
  "zone": () => import("./zone.json") as unknown as Promise<IOxford>,
};

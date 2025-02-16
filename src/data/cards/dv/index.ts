import { IOxford } from "../../../types/index.js";

export const dir_dv: Record<string, () => Promise<IOxford>> = {
  "dvd": () => import("./dvd.json") as unknown as Promise<IOxford>,
};

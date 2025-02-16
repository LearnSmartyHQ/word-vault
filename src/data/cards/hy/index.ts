import { IOxford } from "../../../types/index.js";

export const dir_hy: Record<string, () => Promise<IOxford>> = {
  "hydrogen": () => import("./hydrogen.json") as unknown as Promise<IOxford>,
  "hypothesis": () => import("./hypothesis.json") as unknown as Promise<IOxford>,
};

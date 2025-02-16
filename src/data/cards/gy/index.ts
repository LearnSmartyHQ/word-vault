import { IOxford } from "../../../types/index.js";

export const dir_gy: Record<string, () => Promise<IOxford>> = {
  "gym": () => import("./gym.json") as unknown as Promise<IOxford>,
};

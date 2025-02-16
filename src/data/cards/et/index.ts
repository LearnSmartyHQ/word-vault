import { IOxford } from "../../../types/index.js";

export const dir_et: Record<string, () => Promise<IOxford>> = {
  "eternal": () => import("./eternal.json") as unknown as Promise<IOxford>,
  "ethic": () => import("./ethic.json") as unknown as Promise<IOxford>,
  "ethical": () => import("./ethical.json") as unknown as Promise<IOxford>,
  "ethnic": () => import("./ethnic.json") as unknown as Promise<IOxford>,
};

import { IOxford } from "../../../types/index.js";

export const dir_er: Record<string, () => Promise<IOxford>> = {
  "era": () => import("./era.json") as unknown as Promise<IOxford>,
  "erect": () => import("./erect.json") as unknown as Promise<IOxford>,
  "error": () => import("./error.json") as unknown as Promise<IOxford>,
  "erupt": () => import("./erupt.json") as unknown as Promise<IOxford>,
};

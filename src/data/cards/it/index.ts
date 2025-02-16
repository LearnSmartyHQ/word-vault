import { IOxford } from "../../../types/index.js";

export const dir_it: Record<string, () => Promise<IOxford>> = {
  "it": () => import("./it.json") as unknown as Promise<IOxford>,
  "item": () => import("./item.json") as unknown as Promise<IOxford>,
  "its": () => import("./its.json") as unknown as Promise<IOxford>,
  "itself": () => import("./itself.json") as unknown as Promise<IOxford>,
};

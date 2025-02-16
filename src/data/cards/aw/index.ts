import type { IOxford } from "../../../types/index.js";

export const dir_aw: Record<string, () => Promise<IOxford>> = {
  "await": () => import("./await.json") as unknown as Promise<IOxford>,
  "awake": () => import("./awake.json") as unknown as Promise<IOxford>,
  "award": () => import("./award.json") as unknown as Promise<IOxford>,
  "aware": () => import("./aware.json") as unknown as Promise<IOxford>,
  "awareness": () => import("./awareness.json") as unknown as Promise<IOxford>,
  "away": () => import("./away.json") as unknown as Promise<IOxford>,
  "awesome": () => import("./awesome.json") as unknown as Promise<IOxford>,
  "awful": () => import("./awful.json") as unknown as Promise<IOxford>,
  "awkward": () => import("./awkward.json") as unknown as Promise<IOxford>,
};

import { IOxford } from "../../../types/index.js";

export const dir_ep: Record<string, () => Promise<IOxford>> = {
  "epidemic": () => import("./epidemic.json") as unknown as Promise<IOxford>,
  "episode": () => import("./episode.json") as unknown as Promise<IOxford>,
};

import { IOxford } from "../../../types/index.js";

export const dir_ti: Record<string, () => Promise<IOxford>> = {
  "ticket": () => import("./ticket.json") as unknown as Promise<IOxford>,
  "tide": () => import("./tide.json") as unknown as Promise<IOxford>,
  "tidy": () => import("./tidy.json") as unknown as Promise<IOxford>,
  "tie": () => import("./tie.json") as unknown as Promise<IOxford>,
  "tight": () => import("./tight.json") as unknown as Promise<IOxford>,
  "tighten": () => import("./tighten.json") as unknown as Promise<IOxford>,
  "tile": () => import("./tile.json") as unknown as Promise<IOxford>,
  "till": () => import("./till.json") as unknown as Promise<IOxford>,
  "timber": () => import("./timber.json") as unknown as Promise<IOxford>,
  "time": () => import("./time.json") as unknown as Promise<IOxford>,
  "timely": () => import("./timely.json") as unknown as Promise<IOxford>,
  "timing": () => import("./timing.json") as unknown as Promise<IOxford>,
  "tin": () => import("./tin.json") as unknown as Promise<IOxford>,
  "tiny": () => import("./tiny.json") as unknown as Promise<IOxford>,
  "tip": () => import("./tip.json") as unknown as Promise<IOxford>,
  "tire": () => import("./tire.json") as unknown as Promise<IOxford>,
  "tired": () => import("./tired.json") as unknown as Promise<IOxford>,
  "tissue": () => import("./tissue.json") as unknown as Promise<IOxford>,
  "title": () => import("./title.json") as unknown as Promise<IOxford>,
};

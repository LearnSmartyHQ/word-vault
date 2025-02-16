import type { IOxford } from "../../../types/index.js";

export const dir_ri: Record<string, () => Promise<IOxford>> = {
  "rice": () => import("./rice.json") as unknown as Promise<IOxford>,
  "rich": () => import("./rich.json") as unknown as Promise<IOxford>,
  "rid": () => import("./rid.json") as unknown as Promise<IOxford>,
  "ride": () => import("./ride.json") as unknown as Promise<IOxford>,
  "ridiculous": () => import("./ridiculous.json") as unknown as Promise<IOxford>,
  "rifle": () => import("./rifle.json") as unknown as Promise<IOxford>,
  "right": () => import("./right.json") as unknown as Promise<IOxford>,
  "ring": () => import("./ring.json") as unknown as Promise<IOxford>,
  "ring1": () => import("./ring1.json") as unknown as Promise<IOxford>,
  "ring2": () => import("./ring2.json") as unknown as Promise<IOxford>,
  "riot": () => import("./riot.json") as unknown as Promise<IOxford>,
  "rip": () => import("./rip.json") as unknown as Promise<IOxford>,
  "rise": () => import("./rise.json") as unknown as Promise<IOxford>,
  "risk": () => import("./risk.json") as unknown as Promise<IOxford>,
  "risky": () => import("./risky.json") as unknown as Promise<IOxford>,
  "ritual": () => import("./ritual.json") as unknown as Promise<IOxford>,
  "rival": () => import("./rival.json") as unknown as Promise<IOxford>,
  "river": () => import("./river.json") as unknown as Promise<IOxford>,
};

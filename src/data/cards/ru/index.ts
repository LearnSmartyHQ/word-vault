import { IOxford } from "../../../types/index.js";

export const dir_ru: Record<string, () => Promise<IOxford>> = {
  "rub": () => import("./rub.json") as unknown as Promise<IOxford>,
  "rubber": () => import("./rubber.json") as unknown as Promise<IOxford>,
  "rubbish": () => import("./rubbish.json") as unknown as Promise<IOxford>,
  "rude": () => import("./rude.json") as unknown as Promise<IOxford>,
  "rugby": () => import("./rugby.json") as unknown as Promise<IOxford>,
  "ruin": () => import("./ruin.json") as unknown as Promise<IOxford>,
  "rule": () => import("./rule.json") as unknown as Promise<IOxford>,
  "ruling": () => import("./ruling.json") as unknown as Promise<IOxford>,
  "rumor": () => import("./rumor.json") as unknown as Promise<IOxford>,
  "rumour": () => import("./rumour.json") as unknown as Promise<IOxford>,
  "run": () => import("./run.json") as unknown as Promise<IOxford>,
  "runner": () => import("./runner.json") as unknown as Promise<IOxford>,
  "running": () => import("./running.json") as unknown as Promise<IOxford>,
  "rural": () => import("./rural.json") as unknown as Promise<IOxford>,
  "rush": () => import("./rush.json") as unknown as Promise<IOxford>,
};

import type { IOxford } from "../../../types/index.js";

export const dir_wi: Record<string, () => Promise<IOxford>> = {
  "wicked": () => import("./wicked.json") as unknown as Promise<IOxford>,
  "wide": () => import("./wide.json") as unknown as Promise<IOxford>,
  "widely": () => import("./widely.json") as unknown as Promise<IOxford>,
  "widen": () => import("./widen.json") as unknown as Promise<IOxford>,
  "widespread": () => import("./widespread.json") as unknown as Promise<IOxford>,
  "widow": () => import("./widow.json") as unknown as Promise<IOxford>,
  "width": () => import("./width.json") as unknown as Promise<IOxford>,
  "wife": () => import("./wife.json") as unknown as Promise<IOxford>,
  "wild": () => import("./wild.json") as unknown as Promise<IOxford>,
  "wildlife": () => import("./wildlife.json") as unknown as Promise<IOxford>,
  "will": () => import("./will.json") as unknown as Promise<IOxford>,
  "willing": () => import("./willing.json") as unknown as Promise<IOxford>,
  "willingness": () => import("./willingness.json") as unknown as Promise<IOxford>,
  "win": () => import("./win.json") as unknown as Promise<IOxford>,
  "wind": () => import("./wind.json") as unknown as Promise<IOxford>,
  "wind1": () => import("./wind1.json") as unknown as Promise<IOxford>,
  "wind2": () => import("./wind2.json") as unknown as Promise<IOxford>,
  "window": () => import("./window.json") as unknown as Promise<IOxford>,
  "windy": () => import("./windy.json") as unknown as Promise<IOxford>,
  "wine": () => import("./wine.json") as unknown as Promise<IOxford>,
  "wing": () => import("./wing.json") as unknown as Promise<IOxford>,
  "winner": () => import("./winner.json") as unknown as Promise<IOxford>,
  "winter": () => import("./winter.json") as unknown as Promise<IOxford>,
  "wipe": () => import("./wipe.json") as unknown as Promise<IOxford>,
  "wire": () => import("./wire.json") as unknown as Promise<IOxford>,
  "wisdom": () => import("./wisdom.json") as unknown as Promise<IOxford>,
  "wise": () => import("./wise.json") as unknown as Promise<IOxford>,
  "wish": () => import("./wish.json") as unknown as Promise<IOxford>,
  "wit": () => import("./wit.json") as unknown as Promise<IOxford>,
  "with": () => import("./with.json") as unknown as Promise<IOxford>,
  "withdraw": () => import("./withdraw.json") as unknown as Promise<IOxford>,
  "withdrawal": () => import("./withdrawal.json") as unknown as Promise<IOxford>,
  "within": () => import("./within.json") as unknown as Promise<IOxford>,
  "without": () => import("./without.json") as unknown as Promise<IOxford>,
  "witness": () => import("./witness.json") as unknown as Promise<IOxford>,
  "witty": () => import("./witty.json") as unknown as Promise<IOxford>,
};

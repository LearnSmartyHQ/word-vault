import type { IOxford } from "../../../types/index.js";

export const dir_fl: Record<string, () => Promise<IOxford>> = {
  "flag": () => import("./flag.json") as unknown as Promise<IOxford>,
  "flame": () => import("./flame.json") as unknown as Promise<IOxford>,
  "flash": () => import("./flash.json") as unknown as Promise<IOxford>,
  "flat": () => import("./flat.json") as unknown as Promise<IOxford>,
  "flavor": () => import("./flavor.json") as unknown as Promise<IOxford>,
  "flavour": () => import("./flavour.json") as unknown as Promise<IOxford>,
  "flaw": () => import("./flaw.json") as unknown as Promise<IOxford>,
  "flawed": () => import("./flawed.json") as unknown as Promise<IOxford>,
  "flee": () => import("./flee.json") as unknown as Promise<IOxford>,
  "fleet": () => import("./fleet.json") as unknown as Promise<IOxford>,
  "flesh": () => import("./flesh.json") as unknown as Promise<IOxford>,
  "flexibility": () => import("./flexibility.json") as unknown as Promise<IOxford>,
  "flexible": () => import("./flexible.json") as unknown as Promise<IOxford>,
  "flight": () => import("./flight.json") as unknown as Promise<IOxford>,
  "float": () => import("./float.json") as unknown as Promise<IOxford>,
  "flood": () => import("./flood.json") as unknown as Promise<IOxford>,
  "floor": () => import("./floor.json") as unknown as Promise<IOxford>,
  "flour": () => import("./flour.json") as unknown as Promise<IOxford>,
  "flourish": () => import("./flourish.json") as unknown as Promise<IOxford>,
  "flow": () => import("./flow.json") as unknown as Promise<IOxford>,
  "flower": () => import("./flower.json") as unknown as Promise<IOxford>,
  "flu": () => import("./flu.json") as unknown as Promise<IOxford>,
  "fluctuate": () => import("./fluctuate.json") as unknown as Promise<IOxford>,
  "fluid": () => import("./fluid.json") as unknown as Promise<IOxford>,
  "fly": () => import("./fly.json") as unknown as Promise<IOxford>,
  "flying": () => import("./flying.json") as unknown as Promise<IOxford>,
};

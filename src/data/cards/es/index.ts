import type { IOxford } from "../../../types/index.js";

export const dir_es: Record<string, () => Promise<IOxford>> = {
  "escalate": () => import("./escalate.json") as unknown as Promise<IOxford>,
  "escape": () => import("./escape.json") as unknown as Promise<IOxford>,
  "especial": () => import("./especial.json") as unknown as Promise<IOxford>,
  "especially": () => import("./especially.json") as unknown as Promise<IOxford>,
  "essay": () => import("./essay.json") as unknown as Promise<IOxford>,
  "essence": () => import("./essence.json") as unknown as Promise<IOxford>,
  "essential": () => import("./essential.json") as unknown as Promise<IOxford>,
  "essentially": () => import("./essentially.json") as unknown as Promise<IOxford>,
  "establish": () => import("./establish.json") as unknown as Promise<IOxford>,
  "establishment": () => import("./establishment.json") as unknown as Promise<IOxford>,
  "estate": () => import("./estate.json") as unknown as Promise<IOxford>,
  "estimate": () => import("./estimate.json") as unknown as Promise<IOxford>,
};

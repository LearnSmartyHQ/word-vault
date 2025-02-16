import type { IOxford } from "../../../types/index.js";

export const dir_ag: Record<string, () => Promise<IOxford>> = {
  "again": () => import("./again.json") as unknown as Promise<IOxford>,
  "against": () => import("./against.json") as unknown as Promise<IOxford>,
  "age": () => import("./age.json") as unknown as Promise<IOxford>,
  "aged": () => import("./aged.json") as unknown as Promise<IOxford>,
  "agency": () => import("./agency.json") as unknown as Promise<IOxford>,
  "agenda": () => import("./agenda.json") as unknown as Promise<IOxford>,
  "agent": () => import("./agent.json") as unknown as Promise<IOxford>,
  "aggression": () => import("./aggression.json") as unknown as Promise<IOxford>,
  "aggressive": () => import("./aggressive.json") as unknown as Promise<IOxford>,
  "ago": () => import("./ago.json") as unknown as Promise<IOxford>,
  "agree": () => import("./agree.json") as unknown as Promise<IOxford>,
  "agreement": () => import("./agreement.json") as unknown as Promise<IOxford>,
  "agricultural": () => import("./agricultural.json") as unknown as Promise<IOxford>,
  "agriculture": () => import("./agriculture.json") as unknown as Promise<IOxford>,
};

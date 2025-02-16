import type { IOxford } from "../../../types/index.js";

export const dir_ki: Record<string, () => Promise<IOxford>> = {
  "kick": () => import("./kick.json") as unknown as Promise<IOxford>,
  "kid": () => import("./kid.json") as unknown as Promise<IOxford>,
  "kidnap": () => import("./kidnap.json") as unknown as Promise<IOxford>,
  "kidney": () => import("./kidney.json") as unknown as Promise<IOxford>,
  "kill": () => import("./kill.json") as unknown as Promise<IOxford>,
  "killing": () => import("./killing.json") as unknown as Promise<IOxford>,
  "kilometer": () => import("./kilometer.json") as unknown as Promise<IOxford>,
  "kilometre": () => import("./kilometre.json") as unknown as Promise<IOxford>,
  "kind": () => import("./kind.json") as unknown as Promise<IOxford>,
  "kindergarten": () => import("./kindergarten.json") as unknown as Promise<IOxford>,
  "king": () => import("./king.json") as unknown as Promise<IOxford>,
  "kingdom": () => import("./kingdom.json") as unknown as Promise<IOxford>,
  "kiss": () => import("./kiss.json") as unknown as Promise<IOxford>,
  "kit": () => import("./kit.json") as unknown as Promise<IOxford>,
  "kitchen": () => import("./kitchen.json") as unknown as Promise<IOxford>,
};

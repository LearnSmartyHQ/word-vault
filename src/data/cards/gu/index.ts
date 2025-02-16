import { IOxford } from "../../../types/index.js";

export const dir_gu: Record<string, () => Promise<IOxford>> = {
  "guarantee": () => import("./guarantee.json") as unknown as Promise<IOxford>,
  "guard": () => import("./guard.json") as unknown as Promise<IOxford>,
  "guerrilla": () => import("./guerrilla.json") as unknown as Promise<IOxford>,
  "guess": () => import("./guess.json") as unknown as Promise<IOxford>,
  "guest": () => import("./guest.json") as unknown as Promise<IOxford>,
  "guidance": () => import("./guidance.json") as unknown as Promise<IOxford>,
  "guide": () => import("./guide.json") as unknown as Promise<IOxford>,
  "guideline": () => import("./guideline.json") as unknown as Promise<IOxford>,
  "guilt": () => import("./guilt.json") as unknown as Promise<IOxford>,
  "guilty": () => import("./guilty.json") as unknown as Promise<IOxford>,
  "guitar": () => import("./guitar.json") as unknown as Promise<IOxford>,
  "gun": () => import("./gun.json") as unknown as Promise<IOxford>,
  "gut": () => import("./gut.json") as unknown as Promise<IOxford>,
  "guy": () => import("./guy.json") as unknown as Promise<IOxford>,
};
